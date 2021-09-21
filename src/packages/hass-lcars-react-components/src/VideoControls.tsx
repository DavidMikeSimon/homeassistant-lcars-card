export function VideoControls(props) {
  const mediaEntity = props.hass.states[props.mediaEntityId];

  function mediaCommand(command, extraArgs = {}) {
    props.hass.callService('media_player', command, {
      entity_id: mediaEntity.entity_id,
      ...extraArgs
    });
  }

  function setSource(sourceName) {
    mediaCommand('turn_on');
    mediaCommand('select_source', { source: sourceName });
  }

  return (
    <div class="lcars-row">
      <div class="lcars-bracket left hollow"></div>
      <div class="lcars-column">
        <div class="lcars-row">
          <div class="lcars-element button" onClick={() => setSource('HDMI 4') }>AUX</div>
          <div class="lcars-element button" onClick={() => setSource('HDMI 3/ARC') }>PS4</div>
          <div class="lcars-element button" onClick={() => setSource('HDMI 2') }>SWT</div>
          <div class="lcars-element button" onClick={() => setSource('HDMI 1') }>DNNS</div>
          <div class="lcars-element button" onClick={() => setSource('Home') }>APP</div>
        </div>
        <div class="lcars-row">
          <div class="lcars-element lcars-u-1-2 button" onClick={() => mediaCommand('turn_off')}>OFF</div>
          <div class="lcars-column">
            <div class="lcars-element lcars-u-2 button" onClick={() => mediaCommand('volume_up')}>VOL UP</div>
            <div class="lcars-element lcars-u-2 button" onClick={() => mediaCommand('volume_down')}>VOL DN</div>
          </div>
          <div class="lcars-element lcars-u-2-2 button" onClick={() => mediaCommand('media_play_pause')}>PL/PS</div>
        </div>
      </div>
    </div>
  );
}
