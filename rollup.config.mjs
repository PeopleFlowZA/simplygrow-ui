import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import stringHash from 'string-hash';

import packageJson from './package.json' assert { type: 'json' };

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default [
  {
    input: 'lib/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        globals,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        globals,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({ extensions, browser: true }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        plugins: [postcssPresetEnv(), autoprefixer()],
        autoModules: false,
        onlyModules: false,
        modules: {
          generateScopedName: (name, filename, css) => {
            if (filename.includes('global')) {
              return name;
            }
            const hash = stringHash(css).toString(36).substring(0, 5);
            return `test_${name}_${hash}`;
          },
        },
        extract: 'css/test-library.min.css',
        extensions: ['.scss'],
        use: ['sass'],
        minimize: true,
        sourceMap: false,
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
