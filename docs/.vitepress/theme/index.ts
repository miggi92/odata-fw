import DefaultTheme from 'vitepress/theme';
import Mermaid from './Mermaid.vue';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import type { EnhanceAppContext } from 'vitepress';
import { useRoute } from 'vitepress';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    // register global components
    app.component('Mermaid', Mermaid);
    // Register global components, if you don't want to use it, you don't need to add it
    app.component('vImageViewer', vImageViewer);
  },
  setup() {
    // Get route
    const route = useRoute();
    // Using
    imageViewer(route);
  }
};
