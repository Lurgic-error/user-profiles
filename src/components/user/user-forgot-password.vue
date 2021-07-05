<template>
    <div class="user__forgot-password">
        <el-form  status-icon ref="user" :model="user" :rules="rules">
            <el-form-item label="Email" prop="email">
                <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login('user')">
                    Reset Password
                </el-button>
                <el-button @click="reset('user')">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "user-forgot-password",
        data() {
            return {
                user: {
                    email: "",
                },
                rules: {
                    email: [{
                        required: true,
                        message: "Please enter your email address.",
                        trigger: "blur"
                    }],
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
    .el-form--inline {
        .el-form-item {
            margin-bottom: 0;
        }
    }
</style>