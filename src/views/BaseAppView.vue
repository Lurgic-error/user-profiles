<template>
    <div class="base-app-view">
        <!-- <el-container>
            <el-aside width="200px">
                <base-sidebar></base-sidebar>
            </el-aside>
            
        </el-container> -->

        <el-container>
            <el-header>
                <el-dropdown>
                    <!-- <i class="el-icon-setting" ></i> -->
                    <el-avatar icon="el-icon-user-solid" style="margin-right: 15px"> </el-avatar>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>
                                <router-link :to="{ name:'user-settings'}" class="base__link">Settings</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item divided>
                                <!-- <el-button type="danger" plain>Logout</el-button> -->
                                <router-link class="base__link" :to="{ name:'user-logout'}">Logout</router-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-main>
                    <router-view keep-alive transition transition-mode="out-in"> </router-view>
                </el-main>
                <el-footer>
                    © 2021
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import BaseNavbar from "@/components/base/base-navbar"
    import BaseSidebar from "@/components/base/base-sidebar"
    export default {
        name: "base-app-view",
        components: {
            BaseNavbar,
            BaseSidebar
        }
    }
</script>

<style lang="scss" scoped>
    .base-app-view {
        height: 100%;
    }

    .el-container {
        height: 100%;
    }

    .el-header {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: #14104e;

        .el-dropdown {
            margin-right: auto;
        }
    }
</style>