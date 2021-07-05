<template>
    <div class="user__login">
        <el-form label-position="top" status-icon ref="user" :model="user" :rules="rules">
            <el-form-item label="Email" prop="email">
                <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="user.password"></el-input>
            </el-form-item>
            <router-link class="base__link" :to="{ name:'user-forgot-password'}">Forgot Password?</router-link>
            <el-form-item>
                <el-checkbox v-model="rememberMe">Remember Me.</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login('user')">
                    Login
                </el-button>
                <el-button @click="reset('user')">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {

        name: "user-login",
        data() {
            return {
                user: {
                    email: "",
                    password: "",
                },
                rememberMe: false,
                rules: {
                    email: [{
                        required: true,
                        message: "Please enter your email address.",
                        trigger: "blur"
                    }],
                    password: [{
                        required: true,
                        message: "Please enter your password.",
                        trigger: "change"
                    }]
                }
            };
        },
        methods: {
            async login(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            reset(formName) {
                this.$refs[formName].resetFields();
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>