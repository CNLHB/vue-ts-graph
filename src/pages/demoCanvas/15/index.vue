
<template>
  <div>
    globalCompositeOperation = type
    这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串。
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
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
  draw(ctx)
}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath()
  ctx.moveTo(r, 0);
  for (var i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 == 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
function draw(ctx: CanvasRenderingContext2D) {
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // Create a circular clipping path
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // draw background
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // draw stars
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150));
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }
}
</script>
    

    
    
<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>