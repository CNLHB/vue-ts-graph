
<template>
  <div>
    <div id="container" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import G6 from "@antv/g6/lib/index";

const count = ref(0)
let canvas: HTMLCanvasElement;
onMounted(() => {
  // initCanvas()
})
const initCanvas = () => {
  const data = {
    nodes: [
      {
        id: "0",
        label: "node-0",
        x: 100,
        y: 100,
        description: "This is node-0.",
        subdescription: "This is subdescription of node-0."
      },
      {
        id: "1",
        label: "node-1",
        x: 250,
        y: 100,
        description: "This is node-1.",
        subdescription: "This is subdescription of node-1."
      },
      {
        id: "2",
        label: "node-2",
        x: 150,
        y: 310,
        description: "This is node-2.",
        subdescription: "This is subdescription of node-2."
      },
      {
        id: "3",
        label: "node-3",
        x: 320,
        y: 310,
        description: "This is node-3.",
        subdescription: "This is subdescription of node-3."
      }
    ],
    edges: [
      // {
      //   id: "e0",
      //   source: "0",
      //   target: "1",
      //   description: "This is edge from node 0 to node 1."
      // },
      // {
      //   id: "e1",
      //   source: "0",
      //   target: "2",
      //   description: "This is edge from node 0 to node 2."
      // },
      // {
      //   id: "e2",
      //   source: "0",
      //   target: "3",
      //   description: "This is edge from node 0 to node 3."
      // }
    ]
  };
  const tooltip = new G6.Tooltip({
    offsetX: 15,
    offsetY: 15,
    // 允许出现 tooltip 的 item 类型
    itemTypes: ["node", "edge"],
    getContent: (e) => {
      const outDiv = document.createElement("div");
      outDiv.style.width = "fit-content";
      outDiv.className = "tooltip";
      outDiv.style.transform = `scale(${e.currentTarget.getZoom()})`;
      outDiv.style.transformOrigin = "top left";

      outDiv.innerHTML = `
    <div style="
    background-color: rgba(255, 255, 255, 0.8);
    padding: 12px 15px;
    font-size: 12px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;"
      <h4>Custom Content</h4>
      <ul>
        <li>Type: ${e.item.getType()}</li>
        <li>Label: ${e.item.getModel().label || e.item.getModel().id}</li>
      </ul>
      </div>`;
      return outDiv;
    },
    className: "test"
  });
  const width = document.getElementById("container").scrollWidth;
  const height = document.getElementById("container").scrollHeight || 500;
  console.log(99);
  
  const graph = new G6.Graph({
    container: "container",
    width,
    height,
    linkCenter: true,
    plugins: [tooltip],
    modes: {
      default: ["drag-canvas", "zoom-canvas"]
    },
    defaultNode: {
      size: [80, 40],
      type: "rect",
      style: {
        fill: "#DEE9FF",
        stroke: "#5B8FF9"
      }
    },
    defaultEdge: {
      style: {
        stroke: "#b5b5b5",
        lineAppendWidth: 3
      }
    }
  });
  graph.on("wheelzoom", (e) => {
    e.stopPropagation();
    const ref = Array.from(document.getElementsByClassName("tooltip"));
    ref.forEach((e) => {
      if (e && e.style) {
        e.style.transform = `scale(${graph.getZoom()})`;
      }
    });
  });
  graph.data(data);
  graph.render();

}

</script>
    

    
    
<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>