<!-- KokomiWeb文档, path: /docs -->

<script setup>
// 导入相关组件
import BaseHeader from '@/components/main/BaseHeader.vue';
import BaseFooter from '@/components/main/BaseFooter.vue'
// 按需引入需要的ui组件
import { ElContainer, ElHeader, ElMain, ElFooter } from 'element-plus'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <BaseHeader />
            </el-header>
            <el-main>
                <h1 style="text-align: center;">TODO: Docs Page</h1>
            </el-main>
            <el-footer>
                <BaseFooter />
            </el-footer>
        </el-container>
    </div>
</template>

<style scoped></style>