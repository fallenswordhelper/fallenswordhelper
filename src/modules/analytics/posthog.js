import ph from 'posthog-js';
import playerName from '../common/playerName';
import stdout from '../support/stdout';

function checkForQuickBuff() {
  if (typeof window.self === 'string') {
    playerName();
    window.self = window;
  }
}

export default function posthog() {
  checkForQuickBuff();
  const phTest = false;
  if (defineUserIsDev && !phTest) return;
  try {
    ph.init(
      'phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N',
      {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        persistence: 'localStorage',
      },
    );
  } catch (error) {
    if (defineUserIsDev && !phTest) stdout(error);
  }
}
