const path = require("path");
const url = require("url");

const logger = require("./logger");
const network = require("./network");

/**
 * Get a sanitize path from a URL
 * @param {String} requestedUrl   // URL to sanitize
 * @returns {String}              // Sanitized path
 */
const sanitizePath = (requestedUrl) => {
  // Parse URL
  const parsedUrl = url.parse(requestedUrl);

  // extract URL path
  // Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
  // e.g curl --path-as-is http://localhost:8000/../fileInDanger.txt
  // by limiting the path to current directory only
  return path.normalize(parsedUrl.pathname).replace(/^(\.\.[/\\])+/, "");
};

/**
 * Maps file extension to MIME types
 * @param {String} ext File extension
 * @returns {String} MIME type
 */
const getMimeType = (ext) => {
  const mimeType = {
    ".html": "text/html",
    ".htm": "text/html",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".pdf": "application/pdf",
    ".doc": "application/msword",
  };
  return mimeType[ext];
};

/**
 * Get the content path from a URL
 * @param {Object}    request   Request object
 * @returns {String}            Path name
 */
const getContentPath = (request) => {
  // Detect the IP of the screen
  const ip = network.getIp(request);

  // Remove the `/content` path from the URL requested
  const requestedUrl = request.raw.url.replace("/content", "");

  // Get the full content path from the `public` folder
  const pathname = path.join(
    __dirname,
    "../../public",
    sanitizePath(requestedUrl),
  );

  logger.info(`[${ip}] Content: ${request.raw.url}`);

  return pathname;
};

module.exports = { getMimeType, getContentPath };
