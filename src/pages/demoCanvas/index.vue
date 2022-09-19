<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const selRoute = ref('/test/demoCanvas/1')

const router = useRouter()

const routes = [{
    text: '矩形',
    path: '/test/demoCanvas/1'
}, {
    text: '线',
    path: '/test/demoCanvas/2'
}, {
    text: '圆弧',
    path: '/test/demoCanvas/3'
}, {
    text: '2次贝塞尔曲线',
    path: '/test/demoCanvas/4'
}, {
    text: '3次贝塞尔曲线',
    path: '/test/demoCanvas/5'
}, {
    text: 'path2D',
    path: '/test/demoCanvas/6'
}, {
    text: '颜色',
    path: '/test/demoCanvas/7'
}, {
    text: '图片',
    path: '/test/demoCanvas/8'
}, {
    text: '文本',
    path: '/test/demoCanvas/9'
}, {
    text: '缩放',
    path: '/test/demoCanvas/10'
}, {
    text: '运动',
    path: '/test/demoCanvas/16'
}]
const pushRoute = (route) => {
    router.push(route.path);
    selRoute.value = route.path
}
</script>
    
<template>
    <div>
        <div class="container">
            <div v-for="route in routes" :key="route.path" @click="pushRoute(route)"
                :class="selRoute==route.path?'active':''">
                {{route.text}}
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
    
    
<style lang="scss" scoped>
.container {
    display: flex;
    width: 700px;
    justify-content: center;
    margin-bottom: 100px;


    div {
        flex: 1;
        cursor: pointer;
        text-align: left;

        &.active {
            color: pink;
        }
    }
}

.read-the-docs {
    color: #888;
}
</style>
<style>
canvas {
    border: 1px solid pink;
}
</style>