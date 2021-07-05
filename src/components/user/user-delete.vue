<template>
    <div class="user__delete">
        <p class="text">Enter profile's email address to confirm delete.</p>
        <el-form :inline="true" status-icon ref="user" :model="user" :rules="rules">
            <el-form-item label="Email" prop="email">
                <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="deleteUser('user')">
                    Delete
                </el-button>
                <el-button @click="reset('user')">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "user-delete",
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
            async deleteUser(formName) {
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


p.text {
    margin-bottom: 0.75rem;
}
</style>