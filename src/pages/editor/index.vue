<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
    
<template>
    <div class="wrap">
        <div class="header">
        </div>
        <div class="main">
            <div class="main_l">
            </div>
            <div class="main_l_s">
            </div>
            <div class="main_m" :style="{left:72+'px'}">
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
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.01);
    box-sizing: border-box;
}

.main {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
}

.main_l {
    position: relative;
    z-index: 10;
    height: 100%;
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