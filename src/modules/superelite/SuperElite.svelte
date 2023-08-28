<script>
  import sendEvent from '../analytics/sendEvent';
  import superelite from '../chrome/pageSwitcher/loader/superelite';

  function open() {
    sendEvent('superelite', 'moved');
    superelite();
  }
</script>

<div>
  <button on:click={ open } type="button">SE Tracker</button> moved to Helper Menu
</div>

<style>
div {
  padding-top: 10px;
  text-align: center;
}
button {
  background-color: transparent;
  border: none;
  color: blue;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  text-decoration: underline;
}
</style>
