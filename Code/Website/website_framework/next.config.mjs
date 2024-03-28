/**
 * @author Millicent Riordan; AtlantaEmrys2002
 * @module next.config.mjs
 */

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig}*/
/**
 *  nextConfig is the name of the module
 *  Sets up build settings - including the creation of an 'out file'.
 *  Also, makes sure, using assetPrefix, that _next not ignored in GitHub pages.
 */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? 'https://atlantaemrys2002.github.io/ARQuantum' : undefined,
};

/**
 * @function
 * @param {array} nextConfig
 * @returns config settings of export/build
 */
export default nextConfig;