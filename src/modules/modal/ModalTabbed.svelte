<script>
  import sendEvent from '../analytics/sendEvent';
  import ModalTitled from './ModalTitled.svelte';

  let { activeTabValue = $bindable(0), close, tabs = [], visible = true } = $props();

  const handleClick = (label, tabIndex) => () => {
    sendEvent('ModalTabbed', label);
    activeTabValue = tabIndex;
  };
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    <ul>
      {#each tabs as { label }, index}
        <li class:active={activeTabValue === index}>
          <button onclick={handleClick(label, index)} type="button">
            {label}
          </button>
        </li>
      {/each}
    </ul>
  {/snippet}
  {#each tabs as { component }, value}
    {#if activeTabValue === value}
      {@const SvelteComponent = component}
      <SvelteComponent />
    {/if}
  {/each}
</ModalTitled>

<style>
  ul {
    display: flex;
  }
  li {
    background-color: #fed447;
    background-image: linear-gradient(#fedd70, #fed343);
    border-left-color: #d19405;
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: #d19405;
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: #d19405;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-top-style: solid;
    border-top-width: 1px;
    margin-right: 0.2em;
    margin-top: 1px;
  }
  li:hover {
    background-color: #f2c828;
    background-image: linear-gradient(#f6d65e, #f2c51d);
    border-left-color: #a45b13;
    border-right-color: #a45b13;
    border-top-color: #a45b13;
  }
  li.active {
    background-color: #ffb337;
    background-image: linear-gradient(#ffb439, #ffaa1f);
    border-color: #655e4e;
    margin-bottom: -1px;
    padding-bottom: 1px;
  }
  button {
    background-color: transparent;
    border: none;
    color: #4c3000;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
    line-height: 1;
    padding: 2px 4px 3px;
  }
  button:hover {
    color: #381f00;
  }
  .active button {
    color: #381f00;
    cursor: default;
  }
</style>
