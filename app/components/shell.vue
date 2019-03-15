<template>
  <div class="tetris-shell">
    <div class="tetris-shell-content">
      <control-container></control-container>
      <display-container></display-container>
    </div>
  </div>
</template>

<script>

import controlContainer from './control-container'
import displayContainer from './display-container'

export default {
  
  components: {
    controlContainer,
    displayContainer
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
    height: 960px;
    border: 1px solid black;
  }
}

</style>
