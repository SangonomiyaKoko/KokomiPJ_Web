<!-- KokomiWeb设计, path: /design -->

<script setup>
import BaseHeader from '@/components/main/BaseHeader.vue';
import BaseFooter from '@/components/main/BaseFooter.vue'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <BaseHeader />
            </el-header>
            <el-main>
                <h1 style="text-align: center;">TODO: Design Page</h1>
            </el-main>
            <el-footer>
                <BaseFooter />
            </el-footer>
        </el-container>
    </div>
</template>

<style scoped></style>