<template>
  <div id="app">
    <header>
      <a href="/#/">首页</a>
      <a href="/#/user">用户</a>
      <a href="/#/json">json</a>
      <a href="/#/form">form</a>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
