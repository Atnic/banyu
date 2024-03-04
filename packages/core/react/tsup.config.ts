import {defineConfig} from "tsup";

export default defineConfig({
  clean: true,
  target: "es2019",
  entry: ["src/index.js", "!src/scripts"],
  format: ["cjs", "esm"],
});
