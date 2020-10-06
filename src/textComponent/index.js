import template from './index.html'
import contentJson from './content.json'
import config from './config.js'
import './style.scss'

export default class {
    mount(container) {
        document.title = 'text-component'
        container.innerHTML = template
        const paragraphs = []
        for(let i = 0; i < config.textCounts; i++) {
            paragraphs.push(contentJson.content.paragraphs[i])
            let para = document.createElement("p")
            para.innerHTML = paragraphs[i]
            para.setAttribute("class", `text-${i}`)
            document.querySelector('.text_component').append(para)
        }
    }
}