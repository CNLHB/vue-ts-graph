
<template>
  <div>
    变形 Transforms
    最后一个方法允许对变形矩阵直接修改。<br />
    transform(a, b, c, d, e, f)<br />
    这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，如下面的矩阵所示：<br />
    [
    a c e
    b d f
    0 0 1 ]<br />
    如果任意一个参数是Infinity，变形矩阵也必须被标记为无限大，否则会抛出异常。<br />
    这个函数的参数各自代表如下：<br />
    a (m11)<br />
    水平方向的缩放<br />
    b(m12)<br />
    竖直方向的倾斜偏移<br />
    c(m21)<br />
    水平方向的倾斜偏移<br />
    d(m22)<br />
    竖直方向的缩放<br />
    e(dx)<br />
    水平方向的移动<br />
    f(dy)<br />
    竖直方向的移动<br />
    setTransform(a, b, c, d, e, f)<br />
    这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用<br />
    transform方法。如果任意一个参数是无限大，那么变形矩阵也必须被标记为无限大，否则会抛出异常。从根本上来说，该方法是取消了当前变形，然后设置为指定的变形，一步完成。<br />

    resetTransform()<br />
    重置当前变形为单位矩阵，它和调用以下语句是一样的：ctx.setTransform(1, 0, 0, 1, 0, 0);<br />
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
  var sin = Math.sin(Math.PI / 6);
  var cos = Math.cos(Math.PI / 6);


  ctx.translate(100, 100);
  var c = 0;
  for (var i = 0; i <= 12; i++) {
    c = Math.floor(255 / 12 * i);
    ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
    ctx.fillRect(0, 0, 100, 10);
    //一直叠加变换
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
  ctx.fillRect(0, 50, 100, 100);
}
</script>
    

    
    
<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>