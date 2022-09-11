<script>
import daBazaarBuy from '../_dataAccess/daBazaarBuy';
import dialogMsg from '../common/dialogMsg';
import addCommas from '../system/addCommas';

export let potions = [];

/* eslint-disable no-param-reassign */
potions = potions.map((p) => {
  p.count = 1;
  p.promise = Promise.resolve();
  return p;
});

async function buyButton(potion) {
  potion.promise = daBazaarBuy(potion.id, potion.count);
  const response = await potion.promise;
  if (response.s) {
    dialogMsg(`You successfully purchased ${potion.count} "${response.r[0].n}"`);
  } else {
    dialogMsg(response.e.message);
  }
}
/* eslint-enable no-param-reassign */
</script>
<div id="bazaar">
    {#each potions as potion (potion.id)}
    <div class="potion">
        <img
            class="potion-img tip-dynamic"
            src="{potion.img}"
            alt="Potion"
            data-tipped="{potion.fetch}" />
        <div class="prices">
            {addCommas(potion.price)} <img
                src="https://cdn2.fallensword.com/currency/0.png"
                data-hasqtip="1"
                oldtitle="Gold"
                alt="Gold"
                title=""
                aria-describedby="qtip-1" />
            x <input
                type="number"
                bind:value={potion.count}
                min=1
                max=100 /><br/>
            = {addCommas(potion.price * potion.count)} <img
                src="https://cdn2.fallensword.com/currency/0.png"
                alt="Gold"
                data-hasqtip="1"
                oldtitle="Gold"
                title=""
                aria-describedby="qtip-1" />
        </div>
        {#await potion.promise}
        <span class="fshSpinner fshSpinner12"></span>
        {:then}
        <button type="button" class="custombutton" on:click={buyButton(potion)}>Buy</button>
        {/await}
    </div>
    {/each}
</div>
<style>
#bazaar {
    text-align: center;
}
.potion-img {
   background: url('https://cdn2.fallensword.com/ui/inventory/2x3.png');
   width: 60px;
   height: 90px;
   margin: 0px auto;
}
.potion {
    display: inline-block;
    width: 120px;
    text-align: center;
    margin: 12px;
}
.prices {
    margin-top: 6px;
    line-height: 2em;
}
.prices > img {
    display: inline-block;
}
input {
    width: 3.5em;
}
</style>
