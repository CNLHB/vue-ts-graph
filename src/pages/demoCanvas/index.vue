<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import routesConfig from '../../router/modules/test/index'
import { cloneDeep } from 'lodash';
const selRoute = ref('/test/demoCanvas/1')

const router = useRouter()

const routes = routesConfig
const pushRoute = (route) => {
    router.push(`/test/${route.path}`);
    selRoute.value = route.path
}
</script>
    
<template>
    <div class="vertical_demo">
        <!-- <div class="container">
            <div v-for="route in routes" :key="route.path" @click="pushRoute(route)"
                :class="selRoute==route.path?'active':''">
                {{route.name.split('/')[1]}}
            </div>
        </div> -->
        <el-row class="tac">
            <el-col :span="6">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
            >
                <el-sub-menu :index="`${index+1}`" v-for="(route,index) in routes" :key="route.name">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>{{route.name}}</span>
                </template>
                    <el-menu-item  @click="pushRoute(path)" :index="`${index+1}-${pIndex+1}`" :key="route.path" v-for="(path,pIndex) in route.children">{{path.name.split('/')[1]}}</el-menu-item>
                </el-sub-menu>

            </el-menu>
            </el-col>
            <el-col  :span="16"  :offset="2">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
    
    
<style lang="scss" scoped>
.vertical_demo{
    padding-top: 50px;
}
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