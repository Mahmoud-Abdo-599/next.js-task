module.exports = {
    images: {
      domains: ['logo.clearbit.com'],
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/10',
            permanent: true,
          },
        ]
      },
  }