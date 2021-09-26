import alias from '@rollup/plugin-alias';
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
    sourcemap: ENV == 'dev',
  },
  plugins: [
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
        { find: 'react-dom', replacement: 'preact/compat' },
        { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' }
      ]
    }),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(ENV),
      preventAssignment: true,
    }),
    typescript({
      sourceMap: false, // Conflicts with rollup's own sourcemapper
    }),
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
