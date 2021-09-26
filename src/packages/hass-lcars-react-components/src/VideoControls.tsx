import { JSX } from 'preact';
import { useSwipeable } from 'react-swipeable';

import { useHassContext } from './hassContext';

export function VideoControls(props): JSX.Element {
  const { mediaEntityId } = props;
  const { hass } = useHassContext();
  const mediaEntity = hass.states[mediaEntityId];
  const remoteEntity = hass.states[mediaEntityId.replace("media_player", "remote")];

  function mediaCommand(command: string, extraArgs = {}): void {
    hass.callService('media_player', command, {
      entity_id: mediaEntity.entity_id,
      ...extraArgs
    });
  }

  function remoteCommand(command: string): void {
    if (!remoteEntity) { return };
    hass.callService('remote', 'send_command', {
      entity_id: remoteEntity.entity_id,
      command
    });
  }

  function setSource(sourceName: string): void {
    mediaCommand('turn_on');
    mediaCommand('select_source', { source: sourceName });
  }

  function autoPlayPause(): void {
    hass.callService('script', 'turn_on', {
      entity_id: 'script.contextual_media_play_pause'
    });
  }

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      const currentVolume = mediaEntity.attributes?.volume_level;
      if (!currentVolume) { return; }
      console.log(eventData);
      const delta = eventData?.deltaX;
      if (!delta) { return; }
      const newVolume = Math.min(1.0, Math.max(0.0, currentVolume + delta/150));
      console.log(newVolume);
      // mediaCommand('volume_set', { volume_level: newVolume });
    }
  });

  return (
    <>
      <div class="lcars-row">
        <div class="lcars-bracket left hollow lcars-u-1-half" />
        <div class="lcars-column">
          <div class="lcars-row">
            <div class="lcars-element button lcars-vu-2" onClick={() => setSource('HDMI 4') }>AUX</div>
            <div class="lcars-element button lcars-vu-2" onClick={() => setSource('HDMI 3/ARC') }>PS4</div>
            <div class="lcars-element button lcars-vu-2" onClick={() => setSource('HDMI 2') }>SWT</div>
            <div class="lcars-element button lcars-vu-2" onClick={() => setSource('HDMI 1') }>DNNS</div>
            <div class="lcars-element button lcars-vu-2" onClick={() => remoteCommand('Home') }>APP</div>
          </div>
          <div class="lcars-row">
            <div class="lcars-element lcars-u-1-2 button" onClick={() => mediaCommand('turn_off')}>OFF</div>
            <div class="lcars-column">
              <div class="lcars-element lcars-u-2 button" onClick={() => mediaCommand('volume_up')}>VOL UP</div>
              <div class="lcars-element lcars-u-2 button" onClick={() => mediaCommand('volume_down')}>VOL DN</div>
            </div>
            <div class="lcars-element lcars-u-2-2 button" onClick={() => autoPlayPause()}>PL/PS</div>
          </div>
        </div>
      </div>
      <div class="lcars-bar double-spacer" />
      <div class="lcars-row">
        <div style="min-width: 1.5rem" />
        <div class="lcars-element lcars-u-5" style="background: linear-gradient(90deg, #d64 0%, #fc6 100%)" {...swipeHandlers}>
          VOL
        </div>
      </div>
    </>
  );
}
