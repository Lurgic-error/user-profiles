<template>
  <div class="view">
      <div class="view__content">
          <h3 class="view__title">Save New Password</h3>
          <user-reset-password></user-reset-password>
          <p class="view__tagline">Already have a profile? <router-link class="base__link" :to="{ name:'user-login'}">Sign in.</router-link></p>
      </div>
  </div>
</template>

<script>
import userResetPassword from '../../components/user/user-reset-password.vue'
export default {
    name:"reset-password",
  components: { userResetPassword },

}
</script>

<style lang="scss" scoped>


.view__content {
    .view__subtitle {
        margin-bottom: .75em;
    }
    .view__tagline {
        margin-top: .75em;
    }
}
</style>

