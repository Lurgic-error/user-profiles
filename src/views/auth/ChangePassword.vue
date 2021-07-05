<template>
  <div class="view">
      <div class="view__content">
          <h3 class="view__title">Change Password</h3>
          <user-change-password></user-change-password>
      </div>
  </div>
</template>

<script>
import userChangePassword from "@/components/user/user-change-password"

export default {

    name:"change-passwowrd",

    components:{
         userChangePassword
    }
}
</script>

<style lang="scss" scoped>

</style>