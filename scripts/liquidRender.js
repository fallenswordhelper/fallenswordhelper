import { basename, dirname } from 'node:path';
import { minify } from 'html-minifier-terser';
import { Liquid } from 'liquidjs';

export default async function liquidRender(file) {
  const engine = new Liquid({ extname: '.liquid', root: dirname(file) });
  const source = await engine.renderFile(basename(file));
  return minify(source, {
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true,
  });
}
