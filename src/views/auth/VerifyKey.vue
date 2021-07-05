<template>
    <div class="view">
        <div class="view__content">
            <h3 class="view__title">Verify Recovery Key</h3>
            <user-verify-key></user-verify-key>
        </div>
    </div>
</template>

<script>
    import userVerifyKey from "@/components/user/user-verify-key.vue";

    export default {

        name: "verify-key",

        components: { userVerifyKey }

    }
</script>

<style lang="scss" scoped>

</style>