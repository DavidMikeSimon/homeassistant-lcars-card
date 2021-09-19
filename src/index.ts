import { register } from './register';

import { LcarsCard } from './lcars-card';

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'lcars-card',
  name: 'LCARS Card',
  description: 'Level 4 Diagnostic',
});

register(LcarsCard, 'lcars-card', ['hass']);
