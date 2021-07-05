<template>
  <div class="view">
      <div class="view__content">
          <h3 class="view__title">Reset Password</h3>
          <p class="view__subtitle">Enter your email to reset your password.</p>
          <user-forgot-password></user-forgot-password>
          <p class="view__tagline">Already have a profile? <router-link class="base__link" :to="{ name:'user-login'}">Sign in.</router-link></p>
      </div>
  </div>
</template>

<script>
import userForgotPassword from '../../components/user/user-forgot-password.vue'
export default {
    name:"forgot-password",
  components: { userForgotPassword },

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

