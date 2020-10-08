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
        container.querySelector('.text-component').addEventListener('click', () => {
            router.go('/text-component')
        })
        container.querySelector('.text-with-media-component').addEventListener('click', () => {
            router.go('/text-with-media-component')
        })
    }
}