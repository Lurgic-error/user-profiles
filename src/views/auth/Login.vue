<template>
  <div class="view">
      <div class="view__content">
        <h3 class="view__title">Login</h3>
        <user-login></user-login>
      </div>
  </div>
</template>

<script>
import userLogin from "@/components/user/user-login.vue"
export default {
name:"login",
components:{
  userLogin
}
}
</script>

<style lang="scss" scoped>

.view {

  &__content {

      h3 {
        text-align: center;
      }
  }
}

</style>