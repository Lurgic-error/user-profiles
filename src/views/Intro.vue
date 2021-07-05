<template>
    <div class="view">
        <div class="view__content">
            <h1>Profiler</h1>
            <el-row>
                <el-button type="primary">
                    <router-link class="base__btn-link text__white" :to="{ name: 'user-registration' }">Sign Up</router-link>
                </el-button>
                
                <el-button plain type="primary" >
                <router-link class="base__btn-link" :to="{ name: 'user-login' }">Sign In</router-link>
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