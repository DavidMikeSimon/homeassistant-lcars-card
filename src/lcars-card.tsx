import {
  HomeAssistant,
} from 'custom-card-helpers';

import { register } from './register';

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'lcars-card',
  name: 'LCARS Card',
  description: 'Level 4 Diagnostic',
});

const LcarsCard = () => {
  return (<p>Hello LCARS!</p>);
};

register(LcarsCard, 'lcars-card', []);

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
