/* This is a new experiment..i will try to reference Osamu Sato's work in order to create 
some classes of shapes that will repeat and mutate...maybe even animate. Wish me luck!*/

const canvas1 = document.querySelector("canvas");

const ctx = canvas1.getContext('2d');


canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
ctx.fillStyle = 'Red';
ctx.fillRect(10,10,100,500)

class Rectangular {
    constructor(x , y, w, h, fill){
    this.x = x;
    this.y = y;
    this.w= w;
    this.h = h;
    this.fill = fill
    }
}
const randomizer = (random) => { random =  Math.random()*Math.ceil(2.1)
                                let decider =  random < 2 ? true : false
                                console.log(decider)
    
                                };

randomizer()


console.log(randomizer.random)

function draw (decider){
    randomizer()
    for (let i = 0; i>10; i++){
        Square1.x = Square1.x + 10
        Square1.y = Square1.y + 10
       
    
    }
drawThis = decider === true ?  ctx.fillRect(Square1.x,Square1.y,Square1.w,Square1.h) : ctx.fillRect(Square2.x,Square2.y,Square2.w,Square2.h) 
drawFillStyle = decider ===true ? ctx.fillStyle ='Green' : ctx.fillStyle='Black'
}
let Square1 = new Rectangular(200,100,50,100,'Green')
let Square2 = new Rectangular(230,110,60,110,'Black')

const squares = {
    square1: [
        'x: 200',
        'y: 100',
        'w: 50',
        'h : 100',
        
    ]

}

for (let i = 0; i>10; i++){
    Square1.x = Square1.x + 10
    Square1.y = Square1.y + 30
   

}

draw()
/* function to choose either one randomly, and place is 20px to the right and 10 px higher than the last one */
ctx.fillStyle = Square1.fill;

ctx.fillRect(Square1.x, Square1.y, Square1.w, Square1.h)

ctx.fillStyle = Square2.fill;

ctx.fillRect(Square2.x, Square2.y, Square2.w, Square2.h)



draw()
