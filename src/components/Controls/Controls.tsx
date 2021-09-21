import { SwitchButton } from '../../packages/hass-lcars-react-components/src';

export function Controls(props) {
  const { hass } = props;
  return (
    <>
      <SwitchButton hass={hass} label="CNR LMP" entityId="switch.corner_lamp" />
      <SwitchButton hass={hass} label="DAVID BED LMP" entityId="switch.davids_bedside_lamp" />
      <h3>VID</h3>
      <div class="lcars-row">
        <div class="lcars-bracket left hollow"></div>
        <div class="lcars-column">
          <div class="lcars-row">
            <div class="lcars-element button">OFF</div>
            <div class="lcars-element button">DNS</div>
            <div class="lcars-element button">PS4</div>
            <div class="lcars-element button">SWT</div>
            <div class="lcars-element button">AUX</div>
          </div>
          <div class="lcars-row">
            <div class="lcars-column">
              <div class="lcars-element lcars-u-2 button">VOL UP</div>
              <div class="lcars-element lcars-u-2 button">VOL DN</div>
            </div>
            <div class="lcars-element lcars-u-3-2">PL/PS</div>
          </div>
        </div>
      </div>
    </>
  );
};
