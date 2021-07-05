<template>
    <div class="user__register">
        <el-form label-position="top" ref="user" status-icon :model="user" :rules="rules">
            <el-form-item label="First name" prop="firstName">
                <el-input v-model="user.firstName"></el-input>
            </el-form-item>
            <el-form-item label="Surname" prop="surname">
                <el-input v-model="user.surname"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
                <el-input v-model="user.email"></el-input>
            </el-form-item>
            <!-- <el-form-item label="Phone number" prop="phoneNumber">
                <el-input v-model="user.phoneNumber"></el-input>
            </el-form-item> -->
            <el-form-item label="Password" prop="password">
                <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item label="Confirm Password" prop="password">
                <el-input type="password" v-model="user.confirmPassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="register('user')">
                    Register
                </el-button>
                <el-button @click="reset('user')">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {
        authAPI
    } from "@/api"
    import { ref } from 'vue'
    export default {

        name: "user-registration",
        data() {
            return {
                user: {
                    firstName: "",
                    surname: "",
                    email: "",
                    // phoneNumber: "",
                    password: "",
                    confirmPassword: ""
                },
                rememberMe: false,
                rules: {
                    firstName: [{
                        required: true,
                        message: "Please enter your first name address.",
                        trigger: "blur"
                    }],
                    surname: [{
                        required: true,
                        message: "Please enter your surname address.",
                        trigger: "blur"
                    }],
                    email: [{
                        required: true,
                        message: "Please enter your email address.",
                        trigger: "blur"
                    }],
                    // phoneNumber: [{
                    //     required: true,
                    //     message: "Please enter your phone number.",
                    //     trigger: "blur"
                    // }, {
                    //     type: "number",
                    //     message: "Phone number must be numbers"
                    // }],
                    password: [{
                        required: true,
                        message: "Please enter your password.",
                        trigger: "change"
                    }]
                }
            };
        },
        methods: {
            async register(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                       return true
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
                 const { user } = await authAPI.register({ ...this.user})
                 this.$router.push({ name:"user-profile", params:{ userID: user.userID }})
                
            },
            reset(formName) {
                this.$refs[formName].resetFields();
            }
        }

    }
</script>

<style lang="scss" scoped>


</style>