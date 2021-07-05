<template>
    <div class="view">
        <div class="view__content">
            <h1>Profiler</h1>
            <el-row>
                <el-button type="primary" @click="$router.push({ name: 'user-registration' })">
                    Sign Up
                </el-button>

                <el-button plain type="primary" @click="$router.push({ name: 'user-login' })">
                    Login
                </el-button>

            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "intro"
    }
</script>

<style lang="scss" scoped>
    .view {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &__content {

            h1 {
                text-align: center;
                margin-bottom: .75em;
            }
        }
    }
</style>