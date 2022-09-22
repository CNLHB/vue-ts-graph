<script setup lang="ts">
import { reactive,ref,onMounted } from 'vue'
import Graph from '../../lib/index'
import ToolBar from "./components/ToolBar.vue";
import SideBar from "./components/SideBar/index.vue";
let graph
const state = reactive({
    graphRef: null
})
onMounted(()=>{
    graph = new Graph({
        root: document.getElementById('graph_box') as HTMLDivElement
    })
    console.log('state.graph',graph.refreshImmediately());
    
})


</script>
    
<template>
    <div class="wrap">
        <div class="header">
            <ToolBar></ToolBar>
        </div>
        <div class="main">
            <div class="main_l">
                <!-- <SideBar /> -->
            </div>
            <div class="main_l_s">
            </div>
            <div id="graph_box" ref="graphRef" class="main_m" :style="{left:72+'px'}">
            </div>
            <div class="main_r">
            </div>
        </div>
    </div>
</template>
    
    
<style lang="scss" scoped>
.wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
}

.header {
    position: relative;
    display: flex;
    align-items: center;
    background: #fff;
    height: 54px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.01);
    box-sizing: border-box;
}

.main {
    position: absolute;
    top: 54px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
}

.main_l {
    position: relative;
    z-index: 10;
    height: 100%;
    width: 72px;
}

.main_l_s {
    position: absolute;
    height: 100%;
}

.main_r {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
}

.main_m {
    position: absolute;
    top: 0;
    bottom: 0;
    transition: left 0.35s;
    background-color: #eef2f8;
    right: 0;
    left: 350px;
}

.disabled_editor {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2046;
    cursor: not-allowed;
}
</style>