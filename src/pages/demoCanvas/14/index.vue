
<template>
  <div>
    <canvas id="cw"></canvas>
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
var cn;
//= document.getElementById('cw');
var c;
var u = 10;
const m = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
window.onmousemove = function (e) {
  m.x = e.clientX;
  m.y = e.clientY;

}
function gc() {
  var s = "0123456789ABCDEF";
  var c = "#";
  for (var i = 0; i < 6; i++) {
    c += s[Math.ceil(Math.random() * 15)]
  }
  return c
}
var a = [];
window.onload = function myfunction() {
  cn = document.getElementById('cw');
  c = cn.getContext('2d');

  for (var i = 0; i < 10; i++) {
    var r = 30;
    var x = Math.random() * (innerWidth - 2 * r) + r;
    var y = Math.random() * (innerHeight - 2 * r) + r;
    var t = new ob(innerWidth / 2, innerHeight / 2, 5, "red", Math.random() * 200 + 20, 2);
    a.push(t);
  }
  //cn.style.backgroundColor = "#700bc8";

  c.lineWidth = "2";
  c.globalAlpha = 0.5;
  resize();
  anim()
}
window.onresize = function () {

  resize();

}
function resize() {
  cn.height = innerHeight;
  cn.width = innerWidth;
  for (var i = 0; i < 101; i++) {
    var r = 30;
    var x = Math.random() * (innerWidth - 2 * r) + r;
    var y = Math.random() * (innerHeight - 2 * r) + r;
    a[i] = new ob(innerWidth / 2, innerHeight / 2, 4, gc(), Math.random() * 200 + 20, 0.02);

  }
  //  a[0] = new ob(innerWidth / 2, innerHeight / 2, 40, "red", 0.05, 0.05);
  //a[0].dr();
}
function ob(x, y, r, cc, o, s) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.cc = cc;
  this.theta = Math.random() * Math.PI * 2;
  this.s = s;
  this.o = o;
  this.t = Math.random() * 150;

  this.o = o;
  this.dr = function () {
    const ls = {
      x: this.x,
      y: this.y
    };
    this.theta += this.s;
    this.x = m.x + Math.cos(this.theta) * this.t;
    this.y = m.y + Math.sin(this.theta) * this.t;
    c.beginPath();
    c.lineWidth = this.r;
    c.strokeStyle = this.cc;
    c.moveTo(ls.x, ls.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();

  }
}
function anim() {
  requestAnimationFrame(anim);
  c.fillStyle = "rgba(0,0,0,0.05)";
  c.fillRect(0, 0, cn.width, cn.height);
  a.forEach(function (e, i) {
    e.dr();
  });

}

function draw(ctx: CanvasRenderingContext2D) {

}
</script>
    

    
    
<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}

#cw {
  position: fixed;
  z-index: -1;
}

body {
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>