/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com']
  }
}

module.exports = nextConfig

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
