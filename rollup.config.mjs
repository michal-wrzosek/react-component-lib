import typescript from "rollup-plugin-typescript2";
import json from '@rollup/plugin-json';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function createConfig() {
  // Read package.json file
  const packageJsonPath = path.resolve(__dirname, './package.json');
  const pkgContent = await fs.readFile(packageJsonPath, 'utf-8');
  const pkg = JSON.parse(pkgContent);

  // Dynamically import TypeScript
  const ts = await import('typescript');

  return {
    input: "src/index.ts",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      json(),
      typescript({
        typescript: ts.default,
      })
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
      {
        file: "example/src/reactComponentLib/index.js",
        format: "es",
        banner: "/* eslint-disable */"
      }
    ]
  };
}
