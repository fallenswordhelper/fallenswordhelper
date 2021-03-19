<script>
  import { cdn } from '../../system/system';

  export let slotId;
  export let moveId;
</script>
<a href="index.php?cmd=arena&subcmd=pickmove&slot_id={slotId}" style="display: inline-block">
  <img src="{cdn}arena/{moveId}.png" />
</a>
