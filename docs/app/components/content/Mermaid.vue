<template>
    <div class="mermaid" v-if="show" ref="mermaidRef">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'

const show = ref(false)
const mermaidRef = ref(null)
const colorMode = useColorMode()

// We store the original code string here so we can re-render it when the theme changes
let graphCode = ''
// Generate a unique ID for this specific diagram instance
const uniqueId = 'mermaid-' + Math.random().toString(36).substr(2, 9)

const renderDiagram = async () => {
    if (!mermaidRef.value) return

    // 1. Get the code (only the first time, otherwise use cached version)
    if (!graphCode) {
        graphCode = mermaidRef.value.innerText
    }

    // If still empty, abort
    if (!graphCode.trim()) return

    // 2. Import Mermaid
    const mermaid = (await import('mermaid')).default

    const isDark = colorMode.value === 'dark'
    const currentTheme = isDark ? 'dark' : 'default'

    // 3. Initialize
    mermaid.initialize({
        startOnLoad: false,
        theme: currentTheme,
        securityLevel: 'loose',
        themeVariables: {
            fontFamily: 'inherit'
        }
    })

    // 4. Clear previous SVG (important when switching themes)
    mermaidRef.value.innerHTML = ''

    try {
        // 5. Render with Unique ID
        const { svg } = await mermaid.render(uniqueId, graphCode)
        mermaidRef.value.innerHTML = svg
    } catch (e) {
        console.error('Mermaid render error:', e)
        mermaidRef.value.innerHTML = `<p style="color:red">${e.message}</p>`
    }
}

onMounted(async () => {
    show.value = true
    await nextTick()
    await renderDiagram()
})

// Re-render when Dark/Light mode changes
watch(() => colorMode.value, () => {
    renderDiagram()
})
</script>

<style scoped>
.mermaid {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}
</style>