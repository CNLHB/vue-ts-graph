<script setup lang="ts">
    import { ref } from 'vue'
    
    defineProps<{ msg: string }>()
    
    const count = ref(0)
    </script>
    
    <template>
        <div>1</div>
    </template>
    
    
    <style lang="scss" scoped>
    .read-the-docs {
      color: #888;
    }
    </style>