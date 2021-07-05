<template>
  <div class="view">
    <div class="view__content">
      <h3 class="view__title">User Profiles</h3>
      <user-list :users="users"></user-list>
    </div>
  </div>
</template>

<script>
import { usersAPI } from '@/api'
  import userList from "../../components/user/user-list.vue"
import { onMounted, ref } from '@vue/runtime-core'

  export default {
    name: "user-profiles",
    components: {
      userList
    },

    setup(props){
      let users = ref([])

      const getUserList = async () => {
        const results = await usersAPI.getUserList()
        users.value = results.users
      } 

      onMounted(getUserList)
      return { users, getUserList }
    }
  }
</script>

<style lang="scss" scoped>

</style>