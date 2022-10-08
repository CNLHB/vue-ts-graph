
<template>
  <div>
    <canvas id="canvas1" width="500" height="500"></canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const count = ref(0)
/**
 * save()
保存画布 (canvas) 的所有状态
restore()
save 和 restore 方法是用来保存和恢复 canvas 状态的，都
没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。
 * 当前应用的变形（即移动，旋转和缩放，见下）
以及下面这些属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
当前的裁切路径（clipping path），会在下一节介绍
你可以调用任意多次 save方法。每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。
 */
onMounted(() => {
  const canvas: HTMLCanvasElement = document.getElementById('canvas1') as HTMLCanvasElement
  initCanvas(canvas)
})
const initCanvas = (canvas: HTMLCanvasElement) => {
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
  draw(ctx)
}
function draw(ctx: CanvasRenderingContext2D) {
  ctx.fillRect(0, 0, 150, 150);   // 使用默认设置绘制一个矩形
  ctx.save();                  // 保存默认状态

  ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
  ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

  ctx.save();                  // 保存当前状态
  ctx.fillStyle = '#FFF'       // 再次改变颜色配置
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形

  ctx.restore();               // 重新加载之前的颜色状态
  ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形

  ctx.restore();               // 加载默认颜色配置
  ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形
}
</script>
    

    
    
<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>