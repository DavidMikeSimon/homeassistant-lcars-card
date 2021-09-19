import lcarsStyl from './index.styl';
import Dashboard from './components/Dashboard';

export const LcarsCard = ({ hass }) => {
  console.log(lcarsStyl);
  return (<>
    <style>{lcarsStyl}</style>
    <Dashboard hass={hass} />
  </>);
};

