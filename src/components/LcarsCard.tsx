import { JSX } from 'preact/jsx-runtime';
import lcarsStyl from '../stylus/index.styl';
import Dashboard from './Dashboard';
import { HassContextProvider } from '../packages/hass-lcars-react-components/src/hassContext';

export const LcarsCard = ({ hass }): JSX.Element => {
  return (
    <HassContextProvider hass={hass}>
      <>
        <style>{lcarsStyl}</style>
        <Dashboard />
      </>
    </HassContextProvider>
  );
};

