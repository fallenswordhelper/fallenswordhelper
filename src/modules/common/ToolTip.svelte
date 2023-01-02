<script>
export let tooltip;
export let tooltiptext;
</script>
<div class="tooltip" {...$$restProps}>
  <slot name="tooltip">{@html tooltip}</slot>
  <div class="tooltiptext">
    <slot name="tooltiptext">{@html tooltiptext}</slot>
  </div>
</div>
<style>
.tooltip {
  border-bottom: 1px dotted black;
  display: inline-block;
  position: relative;
}

.tooltip .tooltiptext {
  background-color: black;
  border-radius: 6px;
  bottom: 150%;
  color: #fff;
  left: 50%;
  margin-left: -154px;
  padding: 5px;
  position: absolute;
  text-align: left;
  visibility: hidden;
  width: 300px;
  z-index: 1;
}

.tooltip .tooltiptext::after {
  border-color: black transparent transparent transparent;
  border-style: solid;
  border-width: 5px;
  content: "";
  left: 50%;
  margin-left: -5px;
  position: absolute;
  top: 100%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
