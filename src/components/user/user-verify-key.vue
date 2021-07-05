<template>
    <div class="user__verify-key">
        <el-form :model="keyVerificationForm" status-icon ref="keyVerificationForm" class="demo-ruleForm">
            <el-form-item label="Verification Key" prop="key" :rules="[
      { required: true, message: 'Verification key is required.'},
      { type: 'number', message: 'Verification key must be a number.'}
    ]">
                <el-input type="key" v-model.number="keyVerificationForm.key" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="verify('keyVerificationForm')">Verify Key</el-button>
                <el-button @click="reset('keyVerificationForm')">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "user-verify-key",
        data() {
            return {
                keyVerificationForm: {
                    key: ''
                }
            };
        },
        methods: {
            verify(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
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