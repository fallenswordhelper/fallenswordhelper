import { basename, dirname } from 'node:path';
import { minify } from 'html-minifier-terser';
import { Liquid } from 'liquidjs';

const liquidPlugin = {
  name: 'liquid',
  setup(build) {
    build.onLoad({ filter: /\.liquid$/ }, async (args) => {
      const engine = new Liquid({ root: dirname(args.path) });
      const source = await engine.renderFile(basename(args.path));
      const result = await minify(source, {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      });
      return {
        contents: result,
        loader: 'text',
      };
    });
  },
};

export default liquidPlugin;
