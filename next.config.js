const isProd = process.env.NODE_ENV === "production";

const withImages = require("next-images");

/*
 * Gets the BASE_PATH from the command used to start this app.
 * If BASE_PATH is specified but it does not start with a "/"
 * then add it.
 */
function getBasePath() {
  var basePath = "";

  if (isProd && process.env.BASE_PATH) {
    if (process.env.BASE_PATH.startsWith("/")) {
      basePath = process.env.BASE_PATH;
    } else {
      basePath = "/" + process.env.BASE_PATH;
    }
  }

  console.log("getBasePath() : isProd = " + isProd);
  console.log("getBasePath() : basePath = " + basePath);

  return basePath;
}

module.exports = withImages({
  assetPrefix: getBasePath(),

  publicRuntimeConfig: {
    basePath: getBasePath(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
