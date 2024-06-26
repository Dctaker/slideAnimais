export default class Slide{
    constructor(slider, wrapper){
        this.slider = document.querySelector(slider)
        this.wrapper = document.querySelector(wrapper)
    }

    onStart(event){
        event.preventDefault()
        console.log('mousedown')
        this.wrapper.addEventListener('mousemove' , this.onMove)
    }

    onMove(event){
        console.log('moveu')
    }

    onEnd(event){
        console.log('Acabou')
        this.wrapper.removeEventListener('mousemove' , this.onMove)

    }

    addSlideEvents(){
        this.wrapper.addEventListener('mousedown' , this.onStart)
        this.wrapper.addEventListener('mouseup' , this.onEnd)

    }


    bindEvents(){
        this.onStart = this.onStart.bind(this)
        this.onMove = this.onMove.bind(this)
        this.onEnd = this.onEnd.bind(this)

    }

    Init(){
        this.bindEvents()
        this.addSlideEvents()
        return this

    }
}