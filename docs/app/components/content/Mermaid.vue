<template>
  <div class="mermaid" v-if="show" ref="mermaidRef">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const show = ref(false)
const mermaidRef = ref(null)

onMounted(async () => {
  show.value = true
  
  // Wir importieren Mermaid nur im Browser, wenn wir es wirklich brauchen
  const mermaid = (await import('mermaid')).default
  
  mermaid.initialize({ startOnLoad: false })
  
  await nextTick()
  
  // Sucht nach dem Slot-Inhalt innerhalb dieser Komponente und rendert ihn
  if (mermaidRef.value) {
    // Liest den Text-Inhalt aus dem Slot (dein Graph-Code)
    const graphDefinition = mermaidRef.value.innerText
    
    // Leert das Element kurz, um Render-Fehler zu vermeiden
    mermaidRef.value.innerHTML = ''
    
    // Rendert den Graphen neu
    const { svg } = await mermaid.render('graphDiv', graphDefinition)
    mermaidRef.value.innerHTML = svg
  }
})
</script>