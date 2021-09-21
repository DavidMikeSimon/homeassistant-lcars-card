import lcarsStyl from './index.styl';
import Dashboard from './components/Dashboard';

export const LcarsCard = ({ hass }) => {
  return (
    <>
      <style>{lcarsStyl}</style>
      <Dashboard hass={hass} />
    </>
  );
};

