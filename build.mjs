import * as esbuild from 'esbuild';

const environment = process.env.NODE_ENV || "prod";
const isProd = environment === "prod";

await esbuild.build({
  entryPoints: ['./src/_full.js'],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  outfile: 'dist/leaflet.canvas-markers.js',
});

await esbuild.build({
  entryPoints: ['./src/_standalone.js'],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  outfile: 'dist/leaflet.canvas-markers.standalone.js',
});
