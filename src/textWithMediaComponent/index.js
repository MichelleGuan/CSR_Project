import template from './index.html'
import contentJson from './content.json'
import config from './config.js'
import './style.scss'
import image from './statics/macOS-Big-Sur-Daylight-Wallpaper-iDownloadBlog-5.jpg'

export default class {
    mount(container) {
        document.title = 'text-with-media-component'
        container.innerHTML = template
        let media = document.createElement(contentJson.content.media.type)
        media.setAttribute("src", image)
        if (config.mediaAlign == 'right') { 
            media.setAttribute("class", 'media-right')
            document.querySelector('.text_with_media_component').append(media)
        } else {
            media.setAttribute("class", 'media-left')
            document.querySelector('.text_with_media_component').prepend(media)
        }

        let textHedaing = document.querySelector('#text_with_media_heading');
        textHedaing.innerHTML = contentJson.content.hedaing

        let textContent = document.querySelector('.text_content');
        textContent.innerHTML = contentJson.content.paragraphs
    }
}