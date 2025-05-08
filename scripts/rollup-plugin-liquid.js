import { createFilter } from 'rollup-pluginutils';
import liquidRender from './liquidRender.js';

export default function liquid(options = {}) {
  const filter = createFilter(options.include || ['**/*.liquid'], options.exclude);
  return {
    name: 'liquid',
    async transform(_code, id) {
      if (!filter(id)) return;
      const result = await liquidRender(id);
      return {
        code: `export default ${JSON.stringify(result)}`,
        map: { mappings: '' },
      };
    },
  };
}
