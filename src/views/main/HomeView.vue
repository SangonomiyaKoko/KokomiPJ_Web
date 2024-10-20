<!-- KokomiWeb首页, path: /home -->

<script setup>
// 导入相关组件
import BaseHeader from "@/components/main/BaseHeader.vue";
import BaseFooter from "@/components/main/BaseFooter.vue";
// 按需引入需要的ui组件
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElButton,
  ElCard,
} from "element-plus";
</script>

<template>
  <div class="min-w-[320px]">
    <el-container class="flex flex-col min-h-screen">
      <el-header class="shadow-md">
        <BaseHeader />
      </el-header>
      <el-main class="flex-grow">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- 主要内容部分 -->
          <div class="py-8 sm:py-12 lg:py-16 min-h-[calc(100vh-64px)] flex items-center">
            <div class="flex flex-col-reverse items-center lg:flex-row">
              <!-- 文字部分 -->
              <div class="mt-6 w-full lg:w-3/5 lg:pr-12 lg:mt-0">
                <h1 class="mb-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                    Kokomi Tool
                  </span>
                </h1>
                <p class="mb-3 text-xl sm:text-2xl md:text-3xl">{{ $t("home.message1") }}</p>
                <p class="mb-4 text-base text-gray-600 sm:text-lg md:text-xl">{{ $t("home.message2") }}</p>
                <div class="grid grid-cols-2 gap-3 w-full sm:grid-cols-3">
                  <!-- 按钮部分 -->
                  <el-button type="primary" round :size="screenSize" class="m-0 w-full text-xs sm:text-sm md:text-base">
                    {{ $t("home.start") }}
                  </el-button>
                  <el-button round :size="screenSize" class="m-0 w-full text-xs sm:text-sm md:text-base">
                    {{ $t("home.docs") }}
                  </el-button>
                  <el-button type="success" round :size="screenSize" class="col-span-2 m-0 w-full text-xs sm:text-sm md:text-base sm:col-span-1">
                    {{ $t("home.sponsor") }}
                  </el-button>
                </div>
              </div>
              <!-- 图片部分 -->
              <div class="mb-6 w-full lg:w-2/5 lg:mb-0">
                <img src="@/assets/png/kokomi-big.png" alt="kokomi-big.png" class="max-w-[50%] sm:max-w-[60%] md:max-w-[70%] lg:max-w-full h-auto mx-auto" />
              </div>
            </div>
          </div>
          
          <!-- 卡片部分 -->
          <div class="py-12">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <!-- 卡片循环部分 -->
              <el-card v-for="i in 6" :key="i" class="h-48 rounded-xl">
                <div class="flex flex-col h-full">
                  <div class="pb-2 text-2xl font-bold border-b">
                    {{ $t(`product.name${i}`) }}
                  </div>
                  <div class="flex-grow py-2 text-gray-600">
                    {{ $t(`product.details${i}`) }}
                  </div>
                  <div class="flex justify-between text-gray-400">
                    <div>{{ $t(`product.version${i}`) }}</div>
                    <div>
                      <a v-if="i !== 6" href="https://github.com/SangonomiyaKoko" rel="noopener noreferrer" class="text-gray-400 no-underline">
                        link→
                      </a>
                      <span v-else>-</span>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer class="bg-gray-100">
        <BaseFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-button {
  margin: 0 !important;
}
</style>
