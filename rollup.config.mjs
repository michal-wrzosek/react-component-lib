import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-preserve-directives';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      preserveDirectives(),
      typescript({
        sourceMap: false,
        tsconfig: './tsconfig.json',
      }),
    ],
    output: [{ dir: 'dist', format: 'esm', preserveModules: true, preserveModulesRoot: 'src' }],
  },
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      preserveDirectives(),
      typescript({
        sourceMap: false,
        tsconfig: './tsconfig.example-nextjs.json',
        declarationDir: 'example-nextjs/src/react-component-lib',
      }),
    ],
    output: [
      {
        dir: 'example-nextjs/src/react-component-lib',
        format: 'es',
        banner: '/* eslint-disable */',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
  },
];
