import { readFile } from 'fs/promises';
import { minify } from 'html-minifier-terser';

const htmlPlugin = {
  name: 'html',
  setup(build) {
    build.onLoad({ filter: /\.html$/ }, async (args) => {
      const source = await readFile(args.path, 'utf8');
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

export default htmlPlugin;
