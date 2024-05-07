import DefaultTheme from 'vitepress/theme';
import Mermaid from './Mermaid.vue';
import type { EnhanceAppContext } from 'vitepress';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    // register global components
    app.component('Mermaid', Mermaid);
  },
};
