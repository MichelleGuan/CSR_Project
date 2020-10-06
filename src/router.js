import homepage from './homepage'
import landing from './landing'
import textComponent from './textComponent'
import textWithMediaComponent from './textWithMediaComponent'

const routes = {
  '/landing': landing,
  '/homepage': homepage,
  '/text-component': textComponent,
  '/text-with-media-component': textWithMediaComponent
}

class Router {
  start() {
    window.addEventListener('popstate', () => {
      this.load(location.pathname)
    })
    this.load(location.pathname)
  }

  go(path) {
    history.pushState({}, '', path)
    this.load(path)
  }

  load(path) {
    if (path === '/') {
      path = '/homepage'
    }
    let view = new routes[path]()
    view.mount(document.body)
  }
}

export default new Router()