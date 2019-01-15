module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? 'show-local-weather'
    : '/',
  indexPath: '../index.html'
}
