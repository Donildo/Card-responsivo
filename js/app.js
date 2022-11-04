// Animações do produto/cor, tamanho, backgraund 

const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const background__colors = document.querySelectorAll('.background__color');
const shoeBg = document.querySelector('.card__image__background');

let prevColor = "blue";
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    if(!animationEnd) return;
    let main = this.getAttribute('main');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let background__color = document.querySelector(`.background__color[color="${color}"]`);
    let prevBackground__color = document.querySelector(`.background__color[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--main', main);
    
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    background__colors.forEach(g => g.classList.remove('first', 'second'));
    background__color.classList.add('first');
    prevBackground__color.classList.add('second');

    prevColor = color;
    animationEnd = false;

    background__color.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);
