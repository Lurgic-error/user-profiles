<template>
    <div class="user__reset-password">
        <el-form :model="userPasswordForm" status-icon label-position="right" :rules="rules" ref="userPasswordForm"
            class="demo-userPasswordForm">
            <el-form-item label="New Password" prop="password">
                <el-input type="password" v-model="userPasswordForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Confirm New Password" prop="confirmPassword">
                <el-input type="password" v-model="userPasswordForm.confirmPassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="savePassword('userPasswordForm')">Save Password</el-button>
                <el-button @click="reset('userPasswordForm')">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {

        name: "user-reset-password",
        data() {
            const validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your new password.'));
                } else {
                    if (this.userPasswordForm.password !== '') {
                        this.$refs.userPasswordForm.validateField('password');
                    }
                    callback();
                }
            };
            const confirmPasswordMatch = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your new password again.'));
                } else if (value !== this.userPasswordForm.password) {
                    callback(new Error('Two passwords don\'t match!'));
                } else {
                    callback();
                }
            };
            return {
                userPasswordForm: {
                    oldPassword: '',
                    password: '',
                    confirmPassword: ''
                },
                rules: {
                    password: [{
                        validator: validatePassword,
                        trigger: 'blur'
                    }],
                    confirmPassword: [{
                        validator: confirmPasswordMatch,
                        trigger: 'blur'
                    }],
                }
            };
        },
        methods: {
            savePassword(formName) {
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
