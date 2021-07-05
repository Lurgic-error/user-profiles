<template>
  <div class="user__subscription">
      <el-switch
  style="display: block"
  v-model="subscribe"
  active-color="#13ce66"
  inactive-color="#ff4949"
>
</el-switch>
  </div>
</template>

<script>
export default {
    name:"usser-subscription",
    data(){
      return {
        subscribe: false
      }
    }
}
</script>

<style lang="scss" scoped>

</style>