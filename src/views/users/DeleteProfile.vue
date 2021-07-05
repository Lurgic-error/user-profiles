<template>
    <div class="view">
        <div class="view__content">
            <h3 class="view__title">Delete Profile</h3>
            <user-delete></user-delete>
        </div>
    </div>
</template>

<script>
    import UserDelete from "@/components/user/user-delete.vue"
    export default {

        name: "delete-profile",
        components: {
            UserDelete
        }

    }
</script>

<style lang="scss" scoped>

</style>