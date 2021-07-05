<template>
  <div class="base__app">

    <router-view v-slot="{Component}">
      <transition name="fade">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
  export default {

    name: "app",
    data: () => ({
      show: true
    })

  }
</script>

<style lang="scss" scoped>
#app,
.base__app {
  height: 100%;
}
</style>