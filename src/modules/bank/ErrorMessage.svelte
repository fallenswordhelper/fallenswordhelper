<script>
  export let header = 'Information';
  export let message;
</script>
<style>
#fsh-error-message {
  border: 2px solid #fff;
  margin: 10px auto;
  width: 80%;
  background-color: #D3CFC1;
  text-align: center;
  padding: 2px;
}
#fsh-error-message-header {
  background-color: #8E8668;
  color: #fff;
  text-transform: capitalize;
}
</style>
<div id="fsh-error-message">
  <div id="fsh-error-message-header">{header}</div>
  {message}
</div>
