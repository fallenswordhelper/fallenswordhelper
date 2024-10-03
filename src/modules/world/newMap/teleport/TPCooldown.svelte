<script>
  import { defTeleport } from '../../../support/constants';
  import { realtimeSecs } from '../../../support/now';

  export let tpButton;
  let countdown = 0;
  let t0 = 0;
  let timer = false;

  function checkCountdown() {
    if (countdown > 0) return;
    clearInterval(timer);
    timer = false;
    tpButton.classList.remove('cooldown');
  }

  function updateCountdown() {
    const cooldown = GameData.player().teleportCooldown;
    countdown = cooldown - realtimeSecs() + t0;
    checkCountdown();
  }

  function startTimer(event, data) {
    t0 = realtimeSecs();
    updateCountdown();
    if (timer || data.response.response !== 0) return;
    timer = setInterval(() => {
      updateCountdown();
    }, 1000);
  }

  window.$.subscribe('stats.player', updateCountdown);
  window.$.subscribe(defTeleport, startTimer);
</script>

{#if timer}
  <div id="tp-overlay">{countdown}</div>
{/if}

<style>
  #tp-overlay {
    opacity: 0.6;
    background-color: #000;
    color: #fff;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 17px;
    height: 17px;
    line-height: 17px;
    text-align: center;
  }
</style>
