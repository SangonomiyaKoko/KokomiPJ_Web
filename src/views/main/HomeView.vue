<!-- KokomiWeb首页, path: /home -->

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
                <div class="home">
                    <div class="home-content">
                        <div class="content-text">
                            <div class="container">
                                <div class="main">
                                    <h1 class="name">
                                        <span class="clip">
                                            Kokomi Tool
                                        </span>
                                    </h1>
                                    <p class="text">{{ $t('home.message1') }}</p>
                                    <p class="tag">{{ $t('home.message2') }}</p>
                                    <div class="butten-items">
                                        <el-button type="primary" round class="butten-item">{{ $t('home.start')
                                            }}</el-button>
                                        <el-button round class="butten-item">{{ $t('home.docs') }}</el-button>
                                        <el-button type="success" round class="butten-item">{{ $t('home.sponsor')
                                            }}</el-button>
                                    </div>
                                </div>
                                <div class="image">
                                    <div class="image-container">
                                        <img src="@/assets/png/kokomi-big.png" alt="kokomi-big.png" class="kokomi-png">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="content-card">
                            <div class="container">
                                <div class="items">
                                    <div class="item">
                                        <el-card class="card-item">
                                            <div class="card-header">
                                                {{ $t('product.name1') }}
                                            </div>
                                            <div class="card-body">
                                                {{ $t('product.details1') }}
                                            </div>
                                            <div class="card-footer">
                                                <div class="product-verson">
                                                    {{ $t('product.version1') }}
                                                </div>
                                                <div class="product-link">
                                                    <a href="https://github.com/SangonomiyaKoko"
                                                        rel="noopener noreferrer">
                                                        link→
                                                    </a>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div class="item">
                                        <el-card class="card-item">
                                            <div class="card-header">
                                                {{ $t('product.name2') }}
                                            </div>
                                            <div class="card-body">
                                                {{ $t('product.details2') }}
                                            </div>
                                            <div class="card-footer">
                                                <div class="product-verson">
                                                    {{ $t('product.version2') }}
                                                </div>
                                                <div class="product-link">
                                                    <a href="https://github.com/SangonomiyaKoko"
                                                        rel="noopener noreferrer">
                                                        link→
                                                    </a>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div class="item">
                                        <el-card class="card-item">
                                            <div class="card-header">
                                                {{ $t('product.name3') }}
                                            </div>
                                            <div class="card-body">
                                                {{ $t('product.details3') }}
                                            </div>
                                            <div class="card-footer">
                                                <div class="product-verson">
                                                    {{ $t('product.version3') }}
                                                </div>
                                                <div class="product-link">
                                                    <a href="https://github.com/SangonomiyaKoko"
                                                        rel="noopener noreferrer">
                                                        link→
                                                    </a>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div class="item">
                                        <el-card class="card-item">
                                            <div class="card-header">
                                                {{ $t('product.name4') }}
                                            </div>
                                            <div class="card-body">
                                                {{ $t('product.details4') }}
                                            </div>
                                            <div class="card-footer">
                                                <div class="product-verson">
                                                    {{ $t('product.version4') }}
                                                </div>
                                                <div class="product-link">
                                                    <a href="https://github.com/SangonomiyaKoko"
                                                        rel="noopener noreferrer">
                                                        link→
                                                    </a>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div class="item">
                                        <el-card class="card-item">
                                            <div class="card-header">
                                                {{ $t('product.name5') }}
                                            </div>
                                            <div class="card-body">
                                                {{ $t('product.details5') }}
                                            </div>
                                            <div class="card-footer">
                                                <div class="product-verson">
                                                    {{ $t('product.version5') }}
                                                </div>
                                                <div class="product-link">
                                                    <a href="https://github.com/SangonomiyaKoko"
                                                        rel="noopener noreferrer">
                                                        link→
                                                    </a>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div class="item">
                                        <el-card class="card-item">
                                            <div class="card-header">
                                                {{ $t('product.name6') }}
                                            </div>
                                            <div class="card-body">
                                                {{ $t('product.details6') }}
                                            </div>
                                            <div class="card-footer">
                                                <div class="product-verson">
                                                    {{ $t('product.version6') }}
                                                </div>
                                                <div class="product-link">
                                                    -
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-main>
            <el-footer>
                <BaseFooter />
            </el-footer>
        </el-container>
    </div>
</template>

<style scoped>
.home {
    width: 100%;
    height: 100%;
    margin-top: 64px;
}

.home .home-content {
    padding-bottom: 128px;
}

.home-content .content-text,
.home-content .content-card {
    padding: 0 64px 0 64px;
}

.home-content .content-text {
    padding: 64px 64px;
}

.content-text .container {
    text-align: left;
    flex-direction: row;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
}

.content-text .main {
    order: 1;
    max-width: 600px;
}

.content-text .main .name {
    font-size: 60px;
    line-height: 64px;
    margin: 0;
}

.content-text .clip {
    background: linear-gradient(120deg, #bd34fe -80%, #6fd6eb);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.content-text .main .text {
    font-size: 52px;
    line-height: 64px;
    margin: 0;
}

.content-text .main .tag {
    font-size: 24px;
    margin-top: 12px;
    line-height: 36px;
    color: rgba(60, 60, 67, .78);
}

.content-text .main .butten-items {
    justify-content: flex-start;
}

.content-text .main .butten-item {
    width: 125px;
    height: 40px;
    font-size: 16px;
    padding: 0 20px;
}

.content-text .image {
    flex-grow: 1;
    order: 2;
    margin: 0;
    min-height: 100%;
}

.content-text .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translate(-32px, -32px);
}

.content-text .image .kokomi-png {
    max-width: 320px;
    max-height: 320px;
}

.content-card .container {
    margin: 0 auto;
    max-width: 1200px;
}

.content-card .items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
}

.content-card .item {
    padding: 8px;
    width: calc(96% / 3);
}

.content-card .item .card-item {
    height: 180px;
    border-radius: 12px;
}

.content-card .card-item .card-header {
    font-size: 24px;
    line-height: 36px;
    font-weight: bold;
    border-bottom: 1px solid #e2e2e3;
}

.content-card .card-item .card-body {
    height: 75px;
    margin-top: 7px;
    margin-bottom: 3px;
    color: rgba(60, 60, 67, .78);
}

.content-card .card-item .card-footer {
    display: flex;
    justify-content: space-between;
    color: rgba(60, 60, 60, .50);
}

.content-card .card-item .card-footer a {
    color: rgba(60, 60, 60, .50);
    text-decoration: none;
}
</style>