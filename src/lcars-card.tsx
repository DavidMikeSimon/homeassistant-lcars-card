import lcarsStyl from './index.styl';
import Dashboard from './components/Dashboard';

export const LcarsCard = ({ hass }) => {
  // FIXME: Stupid hack
  document.body.style.overflow = 'hidden';

  return (
    <>
      <style>{lcarsStyl}</style>
      <Dashboard hass={hass} />
    </>
  );
};

