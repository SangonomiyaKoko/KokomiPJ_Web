<!-- 首页Header组件 -->

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

// 切换语言
const { locale } = useI18n()

const changeLang = (lang) => {
    locale.value = lang
}
</script>

<script>
// 按需引入需要的ui组件
import { ElMenu, ElMenuItem, ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
</script>

<template>
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item class=" no-hover">
            <RouterLink to="/home" class="no-underline">
                <img src="@/assets/png/kokomi.png" alt="Kokomi Tool" class="kokomi-icon">
            </RouterLink>
        </el-menu-item>
        <el-menu-item style="width: 4.5%;">
            <RouterLink to="/design" class="no-underline">
                {{ $t('home.design') }}
            </RouterLink>
        </el-menu-item>
        <el-menu-item style="width: 4.5%;">
            <RouterLink to="/docs" class="no-underline">
                {{ $t('home.document') }}
            </RouterLink>
        </el-menu-item>
        <el-menu-item style="width: 4.5%;">
            <RouterLink to="/blog" class="no-underline">
                {{ $t('home.blog') }}
            </RouterLink>
        </el-menu-item>
        <el-menu-item style="width: 4.5%;">
            <a href="http://43.155.60.190:8000/docs" rel="noopener noreferrer" class="no-underline">
                {{ $t('home.api') }}
            </a>
        </el-menu-item>
        <el-menu-item style="width: 4.5%;">
            <RouterLink to="/oa/home" class="no-underline">
                {{ $t('home.oa') }}
            </RouterLink>
        </el-menu-item>
        <el-menu-item style="width: 3%;">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="@/assets/svg/language.svg" alt="Lang" class="language-icon">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="changeLang('en')">English</el-dropdown-item>
                        <el-dropdown-item @click="changeLang('zhcn')">简体中文</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-menu-item>
        <el-menu-item style="width: 3%;">
            <a href="https://github.com/SangonomiyaKoko" rel="noopener noreferrer" class="no-underline">
                <img src="@/assets/svg/github.svg" alt="Github" class="github-icon">
            </a>
        </el-menu-item>
    </el-menu>
</template>


<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

.kokomi-icon {
    height: 30px;
    vertical-align: middle;
}

.github-icon,
.language-icon {
    vertical-align: middle;
}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}


.no-hover:hover {
    background-color: transparent;
}

.no-underline {
    text-decoration: none;
}
</style>