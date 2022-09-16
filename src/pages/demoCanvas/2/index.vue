
<template>
  <div>
    <canvas id="canvas1" width="500" height="500"></canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const count = ref(0)

onMounted(() => {
  const canvas: HTMLCanvasElement = document.getElementById('canvas1') as HTMLCanvasElement
  initCanvas(canvas)
})
const initCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d')
  draw(ctx)
}
/**
 * 
 * @param ctx 
 * 备注： 当你调用 fill() 函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 closePath() 函数。但是调用 stroke() 时不会自动闭合。
 */
function draw(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
  ctx.moveTo(15, 15);
  ctx.lineTo(200, 175);
  ctx.lineTo(200, 125);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口 (顺时针)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
  ctx.stroke();
}
</script>
    

    
    
<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>