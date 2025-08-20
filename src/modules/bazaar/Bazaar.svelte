<script>
  import daBazaarBuy from '../_dataAccess/daBazaarBuy';
  import dynamicAlert from '../alert/dynamicAlert';
  import sendEvent from '../analytics/sendEvent';
  import addCommas from '../system/addCommas';
  import { cdn } from '../system/system';

  let { potions = [] } = $props();

  let bob = $state(potions);

  async function buyButton(potion) {
    sendEvent('bazaar', 'buyButton');
    potion.promise = daBazaarBuy(potion.id, potion.count);
    const response = await potion.promise;
    if (response?.s) {
      dynamicAlert(
          `You successfully purchased ${potion.count} potion${potion.count > 1 ? 's' : ''}`,
      );
    } else if (response?.e) {
      dynamicAlert(response.e.message);
    }
  }
</script>

<div id="bazaar">
  {#each bob as potion (potion.id)}
    <div class="potion">
      <img
        class="potion-img tip-dynamic"
        style="background: url('{cdn}ui/inventory/2x3.png')"
        src={potion.img}
        alt="Potion"
        data-tipped={potion.fetch}
      />
      <div class="prices">
        {addCommas(potion.price)}
        <img src="{cdn}currency/0.png" alt="Gold" title="Gold" />
        x
        <input type="number" bind:value={potion.count} min="1" max="100" />
        <br />
        = {addCommas(potion.price * potion.count)}
        <img src="{cdn}currency/0.png" alt="Gold" title="Gold" />
      </div>
      <div class="btn-container">
        {#await potion.promise}
          <span class="fshSpinner fshSpinner12"></span>
        {:then}
          <button
            type="button"
            class="custombutton"
            onclick={() => {
              buyButton(potion);
            }}
          >
            Buy
          </button>
        {/await}
      </div>
    </div>
  {/each}
</div>

<style>
  #bazaar {
    column-gap: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 24px;
  }
  .potion {
    text-align: center;
    width: 120px;
  }
  .potion-img {
    height: 90px;
    margin: 0px auto;
    width: 60px;
  }
  .prices {
    line-height: 2em;
    margin-top: 6px;
  }
  input {
    width: 3.5em;
  }
  .btn-container {
    height: 21px;
    position: relative;
  }
</style>
