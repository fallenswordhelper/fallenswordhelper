import liquidRender from './liquidRender.js';

const liquidPlugin = {
  name: 'liquid',
  setup(build) {
    build.onLoad({ filter: /\.liquid$/ }, async (args) => {
      const result = await liquidRender(args.path);
      return {
        contents: result,
        loader: 'text',
      };
    });
  },
};

export default liquidPlugin;
