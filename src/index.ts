import { register } from './register';

import { LcarsCard } from './lcars-card';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const registrationName = process.env.NODE_ENV == 'dev' ? 'lcars-card-dev' : 'lcars-card';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const cardTitle = process.env.NODE_ENV == 'dev' ? 'LCARS Dev' : 'LCARS Card';

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: registrationName,
  name: cardTitle,
  description: 'Level 4 Diagnostic',
});

register(LcarsCard, registrationName, ['hass']);
