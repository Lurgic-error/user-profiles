<template>
    <div class="user__update">
        <el-form label-position="top" ref="user" status-icon :model="user" :rules="rules">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="First name" prop="firstName">
                        <el-input v-model="user.firstName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Surname" prop="surname">
                        <el-input v-model="user.surname"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="Email" prop="email">
                <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item label="Phone number" prop="phoneNumber">
                <el-input v-model="user.phoneNumber"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="updateUser('user')">
                    Update
                </el-button>
                <el-button @click="reset('user')">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {

        name: "user-update",
        data() {
            return {
                user: {
                    firstName: "",
                    surname: "",
                    email: "",
                    phoneNumber: ""
                },
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
                    phoneNumber: [{
                        required: true,
                        message: "Please enter your phone number.",
                        trigger: "blur"
                    }, {
                        type: "number",
                        message: "Phone number must be numbers"
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
            async updateUser(formName) {
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