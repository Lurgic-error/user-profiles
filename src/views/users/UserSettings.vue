<template>
    <div class="view">
        <h3 class="view__title">Settings</h3>
        <div class="view__content">
            <el-tabs tab-position="left">
                <el-tab-pane label="Edit Profile">
                    <div class="tab__content">
                        <el-card class="box-card">
                            <template #header>
                                <h3 class="">Edit Profile</h3>
                            </template>

                            <user-update></user-update>
                        </el-card>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Password">
                    <div class="tab__content">
                        <el-card class="box-card" shadow="always">
                            <template #header>
                                <h3 class="">Password and Privacy</h3>
                            </template>
                            <user-change-password></user-change-password>
                        </el-card>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Notifications">
                    <div class="tab__content">
                        <el-card class="box-card">
                            <template #header>
                                <div class="card-header">
                                    <h3>Notifications</h3>
                                    <user-subscription></user-subscription>
                                </div>
                            </template>
                            <p class="text">
                                Allow push notifications so as to recieve notifications of different events as they happen.
                            </p>
                        </el-card>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Delete Profile">
                    <div class="tab__content">
                        <el-card class="box-card">
                            <template #header>
                                <h3 class="">Delete Profile</h3>
                            </template>
                            <user-delete></user-delete>
                        </el-card>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import userChangePassword from '../../components/user/user-change-password.vue'
    import userUpdate from '../../components/user/user-update.vue'
    import userDelete from '../../components/user/user-delete.vue'
    import userSubscription from '@/components/user/user-subscription.vue'
    export default {
        components: {
            userUpdate,
            userDelete,
            userChangePassword,
            userSubscription
        },
        name: "user-settings"
    }
</script>

<style lang="scss" scoped>
    .tab__content {
        padding: 0 0.75rem;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>