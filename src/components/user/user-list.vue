<template>
  <ul class="user__list">
   <li class="user__list-item"  v-for="user in users" :key="user.userID" >
      <div class="user__container">
        <el-avatar class="user__avatar-container" :size="80"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"> </el-avatar>
        <div class="user__details-container">
          <h3>{{ user.firstName }} {{ user.surname }} </h3>
          <p>email: {{ user.email }}</p>
          <p v-if="user.phoneNumber">phone number: {{ user.phoneNumber }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "user-list",

    props:['users']

  }
</script>

<style lang="scss" scoped>
  .user__list {
    list-style: none;

    .user__list-item {
      margin-bottom: 16px;

      .user__container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;

        .user__details-container {
          flex: 1;
          line-height: 1.4;
          //   *+* {
          //     margin-bottom: 10px;
          //   }

          //   h3 {
          //     margin-bottom: 10px;
          //   }
        }
      }
    }
  }
</style>