import { JSX } from 'preact';

import { SwitchButton, VideoControls } from '../packages/hass-lcars-react-components/src';

export function Controls(): JSX.Element {
  return (
    <>
      <SwitchButton label="CNR LMP" entityId="switch.corner_lamp" />
      <SwitchButton label="DAVID BED LMP" entityId="switch.davids_bedside_lamp" />
      <h3>VID</h3>
      <VideoControls mediaEntityId="media_player.sony_bravia_tv" />
    </>
  );
}
