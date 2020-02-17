class Carousel{
    constructor(root){
        this.root = root
        this.dotsCt = root.querySelector('.dots')
        this.dots = Array.from(root.querySelectorAll('.dots span'))
        this.panels = Array.from(root.querySelectorAll('.panels a'))
        this.pre = root.querySelector('.action .pre')
        this.next = root.querySelector('.action .next')

        this.bind()
    }
    bind(){
        this.dotsCt.onclick = e => {
            if(e.target.tagName !== 'SPAN') return
            let index = this.dots.indexOf(e.target)

            this.setDot(index)
            this.setPanel(index)
        }
        this.pre.onclick = e =>{
            let index =this.dots.indexOf(this.root.querySelector('.dots .active'))
            index = ( index - 1 + this.dots.length )% this.dots.length
            this.setDot(index)
            this.setPanel(index)
        
        }
        this.next.onclick = e =>{
            let index =this.dots.indexOf(this.root.querySelector('.dots .active'))
            index = ( index +1 )% this.dots.length
            this.setDot(index)
            this.setPanel(index)
        }
        
    }
    
    

    setDot(index){
        this.dots.forEach(dot => dot.classList.remove('active'))
        this.dots[index].classList.add('active')
    }
    setPanel(index){
        this.panels.forEach(panel => panel.style.zIndex = 1)
        this.panels[index].style.zIndex = 10
    }


}

// new Carousel(document.querySelector('.carousel'))
document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel))