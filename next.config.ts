/** @type {import('next').NextConfig} */

const nextConfig = {

  async headers() {

    return [

      {

        source: '/:path*',

        headers: [

          {

            key: 'Content-Security-Policy',

            value: "frame-ancestors 'self' https://web-agency-nine-kohl.vercel.app",

          },

        ],

      },

    ]

  },

}

export default nextConfig
