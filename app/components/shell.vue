<template>
  <div class="tetris-shell">
    <div class="tetris-shell-content">
      <screen-container></screen-container>
      <control-container></control-container>
    </div>
  </div>
</template>

<script>

import controlContainer from './control-container'
import screenContainer from './screen-container'

export default {
  
  components: {
    controlContainer,
    screenContainer
  }
}
</script>

<style lang="less">

.tetris-shell {
  display: flex;

  justify-content: center;
  align-content: center;

  &-content {
    width: 480px;
    border: 1px solid black;

    background-color: crimson;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    justify-content: space-around;
    align-items: center;
  }
}

</style>
