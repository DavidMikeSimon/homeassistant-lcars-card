import {
  HomeAssistant,
} from 'custom-card-helpers';

import { register } from './register';

import lcarsStyle from './resources/css/lcars.min.css';
import Dashboard from './components/Dashboard';

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'lcars-card',
  name: 'LCARS Card',
  description: 'Level 4 Diagnostic',
});

const LcarsCard = ({ hass }) => {
  console.log(lcarsStyle);
  return (<>
    <style>{lcarsStyle}</style>
    <Dashboard hass={hass} />
  </>);
};

register(LcarsCard, 'lcars-card', ['hass']);

 // @customElement('lcars-card')
// export class LcarsCard extends LitElement {
//   public static getStubConfig(): object {
//     return {};
//   }

//   @property({ attribute: false }) public hass!: HomeAssistant;

//   public setConfig(): void {
//     return;
//   }

//   protected shouldUpdate(changedProps: PropertyValues): boolean {
//     return !!changedProps;
//   }

//   protected render(): TemplateResult | void {
//     return html`
//       <ha-card
//         header="This is a thing?"
//         tabindex="0"
//         .label="LCARS"
//       ></ha-card>
//     `;
//   }

//   static get styles(): CSSResultGroup {
//     return css``;
//   }
// }
