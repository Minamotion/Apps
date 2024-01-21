class App {
    constructor(){
        this.begin = false
        this.curframe = 0
    }
    start(){
        beginframe()
        this.begin = true
        console.log('App started')
        this.update()
    }
    update(){
        updateframe()
        window.requestAnimationFrame(this.update)
    }
}
const app = new App()
window.addEventListener('load', ()=>{
    document.getElementById('begin-btn').removeAttribute('disabled')
    document.getElementById('begin-btn').innerHTML = 'Start app'
    document.getElementById('begin-btn').addEventListener('click', ()=>{
        document.getElementById('app').removeAttribute('hidden')
        document.getElementById('begin-btn').setAttribute('disabled', true)
        document.getElementById('app').removeAttribute('hidden')
        document.getElementById('begin-btn').innerHTML = 'App started'
        app.start()
    })
})