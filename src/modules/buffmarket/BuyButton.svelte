<script>
	import daBuyBuff from '../_dataAccess/daBuyBuff';
	import { oldActionSpinner } from '../support/constants';

	export let buffId;
	let promise;

	function buyBuff() {
		promise = daBuyBuff(buffId);
	};
</script>
{#await promise}
<img src={oldActionSpinner} alt="loading" />
{:then}
<input
	value="Buy"
	type="button"
	style="margin-bottom: 5px;"
	on:click={buyBuff} />
{/await}
