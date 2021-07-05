<template>
    <div class="base__sidebar">
        <el-menu :default-openeds="['1']">
            <el-menu-item index="2" :route="{ name:'user-settings'}">
        <i class="el-icon-setting"></i>
        <span>Settings</span>
      </el-menu-item>
            <el-menu-item index="2" :route="{ name: 'update-profile'}">
        <i class="el-icon-setting"></i>
        <span>Settings</span>
      </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
name:"base-sidebar"
    }
</script>

<style lang="scss" scoped>

.base__sidebar {
    height: 100%;
    background-color: aqua;
}

.el-menu {
    height: 100%;
}
</style>