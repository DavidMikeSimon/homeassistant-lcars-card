import { JSX, createContext } from 'preact';
import { useContext, useCallback, useState } from 'preact/hooks';

export interface Entity {
  state: string;
  entity_id: string;
  last_changed: string;
  last_updated: string;
}

export interface HassObject {
  callService: (integration: string, action: string, args: {[key: string]: any}) => void;
  states: {[key: string]: Entity};
}

export interface HassContext {
  hass: HassObject;
  poke: (entityId: string) => void;
  isUnsteady: (entityId: string) => boolean;
}

const HassContext = createContext<Partial<HassContext>>({ });

interface Props {
  children: JSX.Element;
  hass: HassObject;
}

const UNSTEADY_MS = 500;

type PokeTimes = {[key: string]: number};

export function HassContextProvider(props: Props): JSX.Element {
  const [pokeTimes, setPokeTimes]: [PokeTimes, (newTimes: PokeTimes) => void] = useState({});

  const poke = (entityId: string): void => {
    setPokeTimes({ [entityId]: Date.now(), ...pokeTimes });
  };

  // WIP: Doesn't reset properly after timeout
  const isUnsteady = useCallback((entityId: string): boolean => {
    const now = Date.now();

    const pokeTime = pokeTimes[entityId];
    if (!pokeTime) { return false; }
    if ((now - pokeTime) > UNSTEADY_MS) { return false; }

    const entityState = props.hass.states[entityId];
    if (!entityState) { return false; }

    const changedAt = Date.parse(entityState.last_updated);
    if (!changedAt) { return false; }

    return now - changedAt > UNSTEADY_MS;
  }, [pokeTimes, props.hass]);

  const context: HassContext = {
    hass: props.hass,
    poke,
    isUnsteady,
  };


  return (
    <HassContext.Provider value={context}>
      { props.children }
    </HassContext.Provider>
  );
}

export function useHassContext(): HassContext {
  return useContext(HassContext) as HassContext;
}
