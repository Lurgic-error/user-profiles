<template>
  <div class="view">
      <div class="view__content">
        <h3 class="view__title">registration</h3>
        <user-registration></user-registration>
      </div>
  </div>
</template>

<script>
import userRegistration from "@/components/user/user-registration.vue"
export default {
name:"registration",
components:{
  userRegistration
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