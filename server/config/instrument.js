// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://527dd22a2f7c72470f2624b44fdd45ad@o4509857863237632.ingest.us.sentry.io/4509857869922304",

  integrations: [Sentry.mongooseIntegration()],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
//   tracesSampleRate:1.0,
});