<template>
  <div id="app">
    <shell></shell>
  </div>
</template>

<script>

import shell from './components/shell'

export default {
  data() {
    return {
    }
  },

  components: {
    shell
  }
}
</script>

<style lang="less">
body, div, * {
  padding: 0;
  margin: 0;
}

#app {
  font-size: 16px;
}
</style>



