<template>
    <div class="user__change-password">
        <el-form :model="userPasswordForm" status-icon label-position="right" :rules="rules" ref="userPasswordForm"
            class="demo-userPasswordForm">
            <el-form-item label="Current Password" prop="oldPassword">
                <el-input type="password" v-model="userPasswordForm.oldPassword" autocomplete="off"></el-input>
            </el-form-item>
            
            <el-form-item label="New Password" prop="newPassword">
                <el-input type="password" v-model="userPasswordForm.newPassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Confirm New Password" prop="confirmPassword">
                <el-input type="password" v-model="userPasswordForm.confirmPassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="savePassword('userPasswordForm')">Change Password</el-button>
                <el-button @click="reset('userPasswordForm')">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {

        name: "user-change-password",
        data() {
            const validateOldPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your current password.'));
                } else {
                    if (this.userPasswordForm.oldPassword !== '') {
                        this.$refs.userPasswordForm.validateField('oldPassword');
                    }
                    callback();
                }
            };
            const validateNewPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your new password.'));
                } else {
                    if (this.userPasswordForm.newPassword !== '') {
                        this.$refs.userPasswordForm.validateField('newPassword');
                    }
                    callback();
                }
            };
            const confirmPasswordMatch = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your new password again.'));
                } else if (value !== this.userPasswordForm.newPassword) {
                    callback(new Error('Two passwords don\'t match!'));
                } else {
                    callback();
                }
            };
            return {
                userPasswordForm: {
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                },
                rules: {
                    oldPassword: [{
                        validator: validateOldPassword,
                        trigger: 'blur'
                    }],
                    newPassword: [{
                        validator: validateNewPassword,
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
