import template from './index.html'
import router from '../router'
import './style.scss'

export default class {
    mount(container) {
        document.title = 'homepage'
        container.innerHTML = template
        container.querySelector('.landing').addEventListener('click', () => {
            router.go('/landing')
        })
    }
}