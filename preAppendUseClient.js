import { SourceMapGenerator } from "source-map";

function prependUseClient() {
  return {
    name: "prepend-use-client",
    renderChunk(code, chunk, options) {
      const prependText = '"use client";\n';
      const newCode = prependText + code;

      // Generate updated sourcemap
      let map = null;
      if (options.sourcemap) {
        const mapGenerator = new SourceMapGenerator({ file: chunk.fileName });

        // Adjust source map for prepended text
        const linesToAdd = prependText.split("\n").length - 1;
        mapGenerator.addMapping({
          source: chunk.fileName,
          original: { line: 1, column: 0 },
          generated: { line: linesToAdd + 1, column: 0 },
        });

        map = mapGenerator.toJSON();
      }

      return { code: newCode, map };
    },
  };
}

export default prependUseClient;
