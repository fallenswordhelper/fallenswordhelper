import ph from 'posthog-js/dist/module.no-external';
import playerName from '../common/playerName';
import stdout from '../support/stdout';

const phTest = false;

export function phEvent(event, props) {
  const showEvent = 0;
  if (defineUserIsDev && showEvent) stdout('phEvent', event, props);
  if (!defineUserIsDev || phTest) ph.capture(event, props);
}

function initPostHog() {
  try {
    ph.init('phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N', {
      advanced_disable_decide: true,
      advanced_disable_feature_flags: true,
      advanced_disable_feature_flags_on_first_load: true,
      advanced_disable_toolbar_metrics: true,
      api_host: 'https://us.i.posthog.com',
      autocapture: false,
      capture_pageview: false,
      disable_compression: false,
      disable_persistence: true,
      disable_session_recording: true,
      disable_surveys: true,
      person_profiles: 'identified_only',
    });
  } catch (error) {
    if (!defineUserIsDev || phTest) stdout(error);
  }
}

export function posthogInit() {
  if (!defineUserIsDev || phTest) {
    if (typeof window.self === 'string') {
      playerName();
      window.self = window;
    }
    initPostHog();
  }
}
