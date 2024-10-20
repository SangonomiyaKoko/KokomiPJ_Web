<!-- 404页面 -->

<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <h1>404 - Page Not Found</h1>
        <h4>
            <RouterLink to="/home" class="link-text">
                > {{ $t('other.notFound') }} < </RouterLink>
        </h4>
    </div>
</template>

<style scoped>
h1 {
    margin-top: 13%;
    margin-bottom: 3%;
    text-align: center;
}

h4 {
    text-align: center;
}

.link-text {
    text-decoration: none;
}
</style>