import sendEvent from '../analytics/sendEvent';
import getValue from '../system/getValue';

// The game asks every question through window.fsConfirm, including links and
// forms marked data-confirm. Each rule names a pref and the prompts it skips.
const rules = [];

function install() {
  const gameConfirm = window.fsConfirm;
  window.fsConfirm = (message, onOk, options) => {
    const rule = rules.find(
      ({ pref, prompts }) =>
        getValue(pref) && prompts.some((re) => re.test(message)),
    );
    if (rule) {
      sendEvent('skipGamePrompts', rule.pref);
      onOk?.();
      return;
    }
    gameConfirm(message, onOk, options);
  };
}

// While pref is on, answer OK to any prompt matching one of the regexes.
// A prompt the game rewords shows as usual.
export default function skipGamePrompts(pref, prompts) {
  if (typeof window.fsConfirm !== 'function') return;
  if (!rules.length) install();
  rules.push({ pref, prompts });
}
