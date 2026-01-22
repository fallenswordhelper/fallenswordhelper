import { minify } from 'csso';

export default function cssoPlugin() {
  return {
    name: 'vite-plugin-csso',
    generateBundle(_, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith('.css') && chunk.type === 'asset') {
          chunk.source = minify(chunk.source).css;
        }
      }
    },
  };
}
