import ph from 'posthog-js';
import playerName from '../common/playerName';
import stdout from '../support/stdout';

function initPostHog(phTest) {
  try {
    ph.init(
      'phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N',
      {
        advanced_disable_decide: 'true',
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        persistence: 'localStorage',
      },
    );
  } catch (error) {
    if (!defineUserIsDev || phTest) stdout(error);
  }
}

export default function posthog() {
  const phTest = false;
  if (!defineUserIsDev || phTest) {
    if (typeof window.self === 'string') {
      playerName();
      window.self = window;
    }
    initPostHog(phTest);
  }
}
