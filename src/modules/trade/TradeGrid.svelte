<script>
  import { defTable } from '../support/constants';
  import getElementsByTagName from '../common/getElementsByTagName';
  import insertElement from '../common/insertElement';
  import task from '../support/task';

  export let itemList = 0;

  const moreToDo = (limit, list) => list.length && performance.now() < limit;

  function batch(target, itemsCol) {
    const limit = performance.now() + 5;
    while (moreToDo(limit, itemsCol)) {
      insertElement(target, itemsCol[0]);
    }
    if (itemsCol.length) {
      task(3, batch, [target, itemsCol]);
    }
  }

  function drawGrid(target) {
    batch(target, getElementsByTagName(defTable, itemList));
  }
</script>

<div class="grid" use:drawGrid></div>

<style>
  .grid {
    column-gap: 6px;
    display: grid;
    grid-template-columns: repeat(6, 60px);
    justify-content: center;
    padding-left: 2px;
    padding-right: 6px;
    padding-top: 2px;
    row-gap: 2px;
  }
  .grid :global(center) {
    width: 60px;
  }
</style>
