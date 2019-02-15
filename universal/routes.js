const routes = module.exports = require('next-routes')()

routes
.add('search', '/search/:term')
.add('track', '/track/:track/artist/:artist/:id')
