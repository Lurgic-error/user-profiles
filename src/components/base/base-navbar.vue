<template>
    <div class="base__navbar">
        <el-menu :router="true" default-active="1" class="el-menu-demo" mode="horizontal" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-submenu index="2">
                <template #title>
                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                </template>
                <el-menu-item index="2-1" :route="{ name: 'user-settings',}">Settings
                </el-menu-item>
                <el-menu-item index="2-2" :route="{name: 'user-logout'}">Logout</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank"><el-avatar icon="el-icon-user-solid"></el-avatar></a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "base-navbar",
    }
</script>

<style lang="scss" scoped>

</style>