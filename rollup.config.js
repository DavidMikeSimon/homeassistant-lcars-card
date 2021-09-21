import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";
import json from '@rollup/plugin-json';
import replace from "@rollup/plugin-replace";
import postcss from 'rollup-plugin-postcss';

const WATCH = process.env.ROLLUP_WATCH === 'true';
const ENV = WATCH ? 'dev' : 'prod';

export default {
  input: ["src/index.ts"],
  output: {
    dir: `./dist/${ENV}`,
    format: "es",
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
    typescript(),
    postcss({
      plugins: []
    }),
    json(),
    babel({
      exclude: "node_modules/**",
    }),
    terser(),
    WATCH && serve({
      contentBase: "./dist/dev",
      host: "0.0.0.0",
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
  ],
};
