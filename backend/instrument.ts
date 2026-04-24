const Sentry = require('@sentry/nestjs');
const { nodeProfilingIntegration } = require('@sentry/profiling-node');

// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: 'https://c62a34825e3dc8412473ea4bd631e328@o4511275372249088.ingest.de.sentry.io/4511275456987216',
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
  ],

  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set sampling rate for profiling
  // This is relative to tracesSampleRate
  profilesSampleRate: 1.0,
  sendDefaultPii: true,
});
