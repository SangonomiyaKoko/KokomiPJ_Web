<!-- 首页Header组件 -->

<script setup>
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";

// 切换语言
const { locale } = useI18n();

const changeLang = (lang) => {
  locale.value = lang;
};

// 深色模式切换
const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  localStorage.setItem("darkMode", isDarkMode.value);
};

onMounted(() => {
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode !== null) {
    isDarkMode.value = JSON.parse(savedDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  }
});
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
    class="flex justify-between items-center px-4 py-2 w-full lg:px-8 dark:bg-gray-800 dark:text-gray-200"
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
              class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {{ $t(`home.${item}`) }}
            </a>
          </template>
          <RouterLink
            v-else
            :to="`/${item}`"
            class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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
            <el-dropdown-menu class="dark:bg-gray-700">
              <el-dropdown-item
                v-for="(item, index) in [
                  'design',
                  'document',
                  'blog',
                  'api',
                  'oa',
                ]"
                :key="index"
                class="dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a
                  v-if="item === 'api'"
                  href="http://43.155.60.190:8000/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  @click="dropdownVisible = false"
                >
                  {{ $t(`home.${item}`) }}
                </a>
                <RouterLink
                  v-else
                  :to="`/${item}`"
                  class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
              />
            </svg>
          </span>
          <template #dropdown>
            <el-dropdown-menu class="dark:bg-gray-700">
              <el-dropdown-item @click="changeLang('en')" class="dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">English</el-dropdown-item>
              <el-dropdown-item @click="changeLang('zhcn')" class="dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">简体中文</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <a
          href="https://github.com/SangonomiyaKoko"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
              />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </g>
          </svg>
        </a>

        <!-- 添加深色模式切换按钮 -->
        <button
          @click="toggleDarkMode"
          class="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <svg
            v-if="isDarkMode"
            xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </div>
  </el-menu>
</template>

<style scoped>
.el-menu {
  --el-menu-bg-color: transparent !important;
  --el-menu-border-color: transparent !important;
}

.el-menu-item {
  --el-menu-hover-bg-color: transparent !important;
}

/* 添加以下样式 */
:deep(.el-dropdown-menu) {
  --el-dropdown-menuItem-hover-fill: transparent;
  --el-text-color-regular: inherit;
}

:deep(.el-dropdown-menu__item:not(.is-disabled):hover) {
  background-color: transparent;
}
</style>
