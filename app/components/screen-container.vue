<template>
  <div class="screen-container">
    <div class="screen-content"></div>
  </div>
</template>

<script>

import screenLeft from './screen-left'
import screenRight from './screen-right'

export default {

  components: {
    
  }
  
}
</script>

<style lang="less">
.screen {

  &-container {
    width: 480px;
  
  }

  &-content {
    width: 390px;
    height: 440px;

    background-color: gray;

    display: flex;

    flex-wrap: nowrap;
  }
}

</style>



