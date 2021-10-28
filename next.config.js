/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/marungbukid/marungbukid.github.io/gh-pages/' : '',
}
