<template>
  <div class="view">
    <div class="view__content">
      <h3 class="view__title">Edit Profile</h3>
      <user-update></user-update>
    </div>
  </div>
</template>

<script>
  import UserUpdate from "@/components/user/user-update.vue"
  export default {

    name: "edit-profile",
    components: {
      UserUpdate
    }

  }
</script>

<style lang="scss" scoped>

</style>