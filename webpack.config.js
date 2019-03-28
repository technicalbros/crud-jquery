const path = require("path")

module.exports = ({mode} = {
    mode: "production"
}) => ({
    entry: path.resolve(__dirname, "./index.js"),
    output: {
        filename: mode === "production" ? "jquery.crud.min.js" : "jquery.crud.js"
    },
    mode,
    externals: {
        "jquery": "jQuery",
        "lodash": "_"
    }
})
