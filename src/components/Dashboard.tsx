import { Controls } from './Controls';

const Dashboard = ({hass}) => {
  return (
    <div className="lcars-app-container" style="background: black">
      <div id="header" className="lcars-row header">
        <div className="lcars-elbow left-bottom lcars-tan-bg"></div>
        <div className="lcars-bar horizontal">
          <div className="lcars-title right">LCARS</div>
        </div>
        <div className="lcars-bar horizontal right-end decorated"></div>
      </div>

      <div id="left-menu" className="lcars-column start-space lcars-u-1">
        <div className="lcars-bar lcars-u-1"></div>
      </div>

      <div id="footer" className="lcars-row">
        <div className="lcars-elbow left-top lcars-tan-bg"></div>
        <div className="lcars-bar horizontal both-divider bottom"></div>
        <div className="lcars-bar horizontal right-end left-divider bottom"></div>
      </div>

      <div id="container">
        <div className="lcars-column lcars-u-5">
          <Controls hass={hass} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
