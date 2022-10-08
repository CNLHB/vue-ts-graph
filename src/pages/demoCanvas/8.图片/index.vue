
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
  // 创建新 image 对象，用作图案
  var img = new Image();
  img.src = 'https://sslstatic.xiaoyusan.com/cmspic/200_1507554402.jpeg?w=750&h=950';
  img.onload = function () {

    // 创建图案
    // var ptrn = ctx.createPattern(img, 'repeat');
    // ctx.fillStyle = ptrn;
    // ctx.fillRect(50, 50, 500, 450);
    // ctx.shadowOffsetX = 2;
    // ctx.shadowOffsetY = 2;
    // ctx.shadowBlur = 2;
    // ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    // 
    ctx.drawImage(img, 0, 0, 500, 500);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
    // 
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "Black";
    ctx.fillText("Sample String", 5, 30);
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
    ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
    ctx.arc(50, 50, 10, 0, Math.PI * 2, true);
    ctx.fill("evenodd");
  }
}
</script>
    

    
    
<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>