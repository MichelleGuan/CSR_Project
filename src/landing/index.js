import template from './index.html'
import './style.scss'
import textComponent from '../textComponent/index'
import textWithMediaComponet from '../textWithMediaComponent/index'
import config from './config'

let text = new textComponent()
let textWithMedia = new textWithMediaComponet()
export default class {
    mount(container) {
        document.title = 'landing'
        container.innerHTML = template
        let _this = this
        config.order.forEach(element => _this.createDiv(element))      
    }
    createDiv(name){
        let childDiv = document.createElement('div')
        childDiv.classList.add(name)
        document.querySelector('.landing').append(childDiv) 
        eval(name).mount(childDiv)
    }
}