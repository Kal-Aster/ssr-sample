const alias = require("@rollup/plugin-alias");
const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const {nodeResolve} = require("@rollup/plugin-node-resolve");
const riot = require("rollup-plugin-riot");

export default {
    input: "src/index.js",
    plugins: [
        alias({
            entries: [
                { find: "canvas", replacement: "src/canvas.js" }
            ]
        }),
        nodeResolve(),
        json(),
        commonjs(),
        riot()
    ],
    output: {
        file: "dist/index.js",
        format: "umd"
    }
}