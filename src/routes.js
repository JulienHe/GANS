const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')
.add('about', '/about', 'about')
.add('aboutProfile', '/about/:id', 'about')
.add('list', '/list', 'list')
.add('blog', '/blog', 'about')
