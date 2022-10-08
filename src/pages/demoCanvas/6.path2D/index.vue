
<template>
  <div>
    <canvas id="canvas1" width="500" height="500"></canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const selRoute = ref(0)

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
  var rectangle = new Path2D();
  rectangle.rect(10, 10, 50, 50);

  var circle = new Path2D();
  circle.moveTo(125, 35);
  circle.arc(100, 35, 25, 0, 2 * Math.PI);

  ctx.stroke(rectangle);
  ctx.fill(circle);
  var p = new Path2D("M10 10 h 80 v 80 h -80 Z");
  console.log(p);

  ctx.stroke(p);

}
</script>
    

    
    
<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>