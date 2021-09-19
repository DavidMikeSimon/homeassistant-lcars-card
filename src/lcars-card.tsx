import lcarsStyle from './resources/css/lcars.min.css';
import Dashboard from './components/Dashboard';

export const LcarsCard = ({ hass }) => {
  console.log(lcarsStyle);
  return (<>
    <style>{lcarsStyle}</style>
    <Dashboard hass={hass} />
  </>);
};

