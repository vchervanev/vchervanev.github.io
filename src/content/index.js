const webpackMarkdownLoader = require.context(
  "!raw-loader!.",
  false,
  /\.md$/
);

const markdownFiles = webpackMarkdownLoader
  .keys()
  .reduce((result, filename) => { result[filename.slice(2, -3)] = webpackMarkdownLoader(filename); return result }, {});

export default markdownFiles