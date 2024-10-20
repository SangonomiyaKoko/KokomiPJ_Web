<!-- 首页Header组件 -->

<script setup>
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

// 切换语言
const { locale } = useI18n();

const changeLang = (lang) => {
  locale.value = lang;
};
</script>

<script>
// 按需引入需要的ui组件
import {
  ElMenu,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from "element-plus";
</script>

<template>
  <el-menu
    class="flex justify-between items-center px-4 py-2 lg:px-8"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item class="!p-0">
      <RouterLink to="/home" class="flex items-center">
        <img
          src="@/assets/png/kokomi.png"
          alt="Kokomi Tool"
          class="w-auto h-8"
        />
      </RouterLink>
    </el-menu-item>

    <div class="flex items-center">
      <!-- 在小屏幕上隐藏菜单项，在大屏幕上显示 -->
      <div class="hidden items-center space-x-4 lg:flex">
        <el-menu-item
          v-for="(item, index) in ['design', 'document', 'blog', 'api', 'oa']"
          :key="index"
          class="!p-0"
        >
          <template v-if="item === 'api'">
            <a
              href="http://43.155.60.190:8000/docs"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-700 hover:text-gray-900"
            >
              {{ $t(`home.${item}`) }}
            </a>
          </template>
          <RouterLink
            v-else
            :to="`/${item}`"
            class="text-gray-700 hover:text-gray-900"
          >
            {{ $t(`home.${item}`) }}
          </RouterLink>
        </el-menu-item>
      </div>

      <div class="flex items-center ml-4 space-x-4">
        <!-- 替换 el-popover 为 el-dropdown -->
        <el-dropdown class="lg:hidden">
          <span class="cursor-pointer lg:hidden" @click="toggleDropdown">
            <i class="text-2xl el-icon-menu"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 12h16M4 6h16M4 18h16"
                /></svg
            ></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(item, index) in [
                  'design',
                  'document',
                  'blog',
                  'api',
                  'oa',
                ]"
                :key="index"
              >
                <a
                  v-if="item === 'api'"
                  href="http://43.155.60.190:8000/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-700 hover:text-gray-900"
                  @click="dropdownVisible = false"
                >
                  {{ $t(`home.${item}`) }}
                </a>
                <RouterLink
                  v-else
                  :to="`/${item}`"
                  class="text-gray-700 hover:text-gray-900"
                  @click="dropdownVisible = false"
                >
                  {{ $t(`home.${item}`) }}
                </RouterLink>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown>
          <span class="cursor-pointer el-dropdown-link">
            <img src="@/assets/svg/language.svg" alt="Lang" class="w-6 h-6" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="changeLang('en')"
                >English</el-dropdown-item
              >
              <el-dropdown-item @click="changeLang('zhcn')"
                >简体中文</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <a
          href="https://github.com/SangonomiyaKoko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/svg/github.svg" alt="Github" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </el-menu>
</template>
