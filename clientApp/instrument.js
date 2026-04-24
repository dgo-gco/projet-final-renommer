import * as Sentry from '@sentry/react';
Sentry.init({
  dsn: 'https://fc2c6d1181a85cc8379abd3af5923671@o4511275372249088.ingest.de.sentry.io/4511275376115792',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
