const concurrently = require("concurrently");
const upath = require("upath");

const browserSyncPath = upath.resolve(
    upath.dirname(__filename),
    "../node_modules/.bin/browser-sync"
);

concurrently(
    [
        {
            command: "node scripts/sb-watch.js",
            name: "SB_WATCH",
            prefixColor: "bgBlue.bold",
        },
        {
            command: `"${browserSyncPath}" --reload-delay 2000 --reload-debounce 2000 dist -w --no-online --no-notify`, // Added --no-notify here
            name: "SB_BROWSER_SYNC",
            prefixColor: "bgGreen.bold",
            ignore: ["dist/css/styles.css"],
            files: ["dist/**/*.html", "dist/**/*.js"], // Exclude CSS
            watchEvents: ["change", "add", "unlink", "addDir", "unlinkDir"],
        },
    ],
    {
        prefix: "name",
        killOthers: ["failure", "success"],
    }
).then(success, failure);

function success() {
    console.log("Success");
}

function failure() {
    console.log("Failure");
}
