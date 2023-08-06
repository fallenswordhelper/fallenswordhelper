<script>
import sendEvent from '../../analytics/sendEvent';
import setValue from '../../system/setValue';
import trackerPrefStore from './trackerPrefStore';

const net64 = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1'
  + 'QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUl'
  + 'r0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95l'
  + 'leXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvk'
  + 'bfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")';

function toggle(evt) {
  sendEvent('SE Tracker', 'Toggle Pref');
  setValue('enableSeTracker', evt.target.checked);
}
</script>

<span class="network" style:background-image={ net64 }></span>
<label>
  Enable SE Tracker
  [&thinsp;<div class="tooltip">
    ?
    <div class="tooltiptext">
      <span class="tooltiptitle">Enable SE Tracker</span><br><br>
      <div>
        If enabled, will track the last time each SE was killed.<br>
        This is DIFFERENT from the usual FSH network activity.<br>
        When this is enabled, if you have ANY game page open in a browser tab it will scan the SE
        Log every 10 minutes.<br>
        You do not need auto-refresh for this to work.
      </div>
    </div>
  </div>&thinsp;]:
  <input bind:checked={$trackerPrefStore} on:click={toggle} type="checkbox">
</label>

<style>
.tooltip {
  border-bottom: 1px dotted black;
  display: inline-block;
  position: relative;
}

.tooltip .tooltiptext {
  background-color: #333;
  border-radius: 6px;
  color: #fff;
  left: 50%;
  margin-left: -154px;
  opacity: 0;
  padding: 5px;
  position: absolute;
  text-align: left;
  top: 150%;
  transition: visibility 0s linear 300ms, opacity 300ms;
  visibility: hidden;
  width: 330px;
  z-index: 1;
}

.tooltip .tooltiptext::after {
  border-bottom-color: #333;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border-style: solid;
  border-width: 5px;
  bottom: 100%;
  content: "";
  left: 45%;
  margin-left: -5px;
  position: absolute;
}

.tooltip:hover .tooltiptext {
  opacity: 1;
  transition-delay:0s;
  visibility: visible;
}

.tooltiptitle {
  color: #FFF380;
  font-weight: bold;
}

.network {
  height: 13px;
  width: 13px;
}

.network::before {
  content: "This function retrieves data from the network. Disable this to increase speed";
}

.network {
  background-size: contain;
  border-bottom: 1px dotted black;
  display: inline-block;
  position: relative;
  vertical-align: text-top;
}

.network::before,
.network::after {
  left: 50%;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transform: translate(-48%, 12px);
  transition: opacity .35s ease .25s;
  user-select: none;
  z-index: 1;
}

.network::before {
  background: #333;
  border-radius: 3px;
  bottom: auto;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.65);
  color: #eee;
  padding: 8px 12px;
  top: 100%;
  white-space: nowrap;
}

.network::after {
  background: transparent;
  border: 8px solid transparent;
  border-bottom-color: #333;
  bottom: 0;
  content: "";
}

.network:hover::before,
.network:hover::after {
  opacity: 1;
}

input[type=checkbox] {
  vertical-align: middle;
}
</style>
