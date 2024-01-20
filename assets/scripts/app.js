class App {
    constructor(){
        this.begin = false
        this.curframe = 0
    }
    start(){
        beginframe()
        this.begin = true
        this.curframe = 1
        this.update()
    }
    update(){
        updateframe()
        this.curframe++
        window.requestAnimationFrame(this.update)
    }
}
const app = new App()
window.addEventListener('load', ()=>{
    document.getElementById('app').removeAttribute('hidden')
    document.getElementById('begin-btn').removeAttribute('disabled')
    document.getElementById('begin-btn').innerHTML = 'Start app'
    document.getElementById('begin-btn').addEventListener('click', ()=>{
        console.log('App started')
        document.getElementById('begin-btn').setAttribute('disabled', true)
        document.getElementById('begin-btn').innerHTML = 'App started'
        app.start()
    })
})