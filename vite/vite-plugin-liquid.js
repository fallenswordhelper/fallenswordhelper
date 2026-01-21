import liquidRender from '../scripts/liquidRender.js';

export default function liquid() {
  return {
    name: 'vite-plugin-liquid',
    async transform(code, id) {
      if (!id.endsWith('.liquid')) return null;
      const result = await liquidRender(id);
      return {
        code: `export default ${JSON.stringify(result)}`,
        map: null,
      };
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.liquid')) {
        const mods = server.moduleGraph.getModulesByFile(file);
        if (mods) {
          mods.forEach((mod) => server.moduleGraph.invalidateModule(mod));
        }
        return [];
      }
    },
  };
}
