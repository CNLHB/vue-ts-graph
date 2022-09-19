
<template>
  <div>
    <canvas id="canvas1" width="500" height="500"></canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const selRoute = ref(0)
let canvas: HTMLCanvasElement
onMounted(() => {
  canvas = document.getElementById('canvas1') as HTMLCanvasElement
  initCanvas(canvas)
})
interface IWh extends WheelEvent {
  wheelDelta: number
}
let ctx
let cx = 0;
let cy = 0;
let mx = 0;
let my = 0;
let mX = 0
let mY = 0
const initCanvas = (canvas: HTMLCanvasElement) => {
  ctx = canvas.getContext('2d')
  function mousemoveEvent(event) {
    mx = event.pageX - cx
    my = event.pageY - cy
    clear()
    draw(ctx)

  }
  canvas.addEventListener('mousedown', function (event) {
    cx = event.pageX + mX
    cy = event.pageY + my
    window.addEventListener('mousemove', mousemoveEvent)
    window.addEventListener('mouseup', function (event) {
      mX =  mx
      mY =  my
      console.log('up',mX,mY);
      window.removeEventListener('mousemove', mousemoveEvent)
    })
  })

  canvas.addEventListener("mousewheel", function (event: IWh) {
    let wheelDelta = event.wheelDelta || event.detail
    console.log('wheelDelta', wheelDelta);
    if (event.wheelDelta < 0) {
      zoom -= 0.1
    } else {
      zoom += 0.1

    }
    clear()
    // 创建新 image 对象，用作图案
    if (zoom > maxZoom) {
      zoom = maxZoom;
    } else if (zoom < minZoom) {
      zoom = minZoom;
    }
    console.log('zoom', zoom);
    draw(ctx)
  })
  draw(ctx)
}
const minZoom = 0.1
const maxZoom = 3
let zoom = 1
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
/**
* 增加图片下载水印功能
*/
//  async downloadImageWatermark(watermarker: HTMLElement, context: CanvasRenderingContext2D, width: number, height: number) {
//     const watermarkStr = watermarker.style.backgroundImage;
//     const watermarkbase64 = watermarkStr.slice(5, watermarkStr.length - 2);
//     const img = new Image();
//     img.src = watermarkbase64;
//     await new Promise((resolve) => {
//       img.onload = () => {
//         const pat = context.createPattern(img, "repeat");
//         context.rect(0, 0, width, height);
//         context.fillStyle = pat;
//         context.fill();
//         resolve('');
//       }
//     });
//   }
/**
 * 
 * @param ctx 
 */

function draw(ctx: CanvasRenderingContext2D) {
  ctx.save()
  ctx.setTransform(zoom, 0, 0, zoom, mx, my)
  ctx.fillStyle = "rgb(200,0,0)";
  // ctx.fillRect(10, 10, 55, 50);
  // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect(30, 30, 55, 50);
  ctx.restore()

}
</script>
    

    
    
<style lang="scss" scoped>
.read-the-docs {

  color: #888;
}
</style>