import { JSX } from 'preact';

import { Controls } from './Controls';

const Dashboard = (): JSX.Element => {
  const hiddenReload = (): void => {
    location.reload();
  };

  return (
    <div className="lcars-app-container" style="background: black">
      <div className="lcars-row header">
        <div className="lcars-elbow left-bottom lcars-tan-bg" />
        <div className="lcars-bar horizontal">
          <div className="lcars-title right" onClick={hiddenReload}>
            LCARS
          </div>
        </div>
        <div className="lcars-bar horizontal right-end decorated" />
      </div>

      <div style={{ display: 'flex', height: '100%' }}>
        <div className="lcars-column left-menu lcars-u-1">
          <div className="lcars-bar lcars-u-1" />
        </div>
        <div className="container">
          <div className="lcars-column lcars-u-2">
            <Controls />
          </div>
        </div>
      </div>

      <div className="lcars-row footer">
        <div className="lcars-elbow left-top lcars-tan-bg" />
        <div className="lcars-bar horizontal both-divider bottom" />
        <div className="lcars-bar horizontal right-end left-divider bottom" />
      </div>
    </div>
  );
};

export default Dashboard;
