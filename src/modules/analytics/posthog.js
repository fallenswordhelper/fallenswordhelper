import ph from 'posthog-js';

export default function posthog() {
  if (defineUserIsDev) return;
  ph.init(
    'phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N',
    {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      persistence: 'localStorage',
    },
  );
}
