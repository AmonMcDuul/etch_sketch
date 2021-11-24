const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnColour = document.createElement('button')
const btnErase = document.createElement('button')
const btnInvis = document.createElement('button')
const btnReset = document.createElement('config')
const btnGridSize = document.createElement('config')
const main = document.querySelector('.main')
const buttonsContainer = document.querySelector('.buttons')
const configContainer = document.querySelector('.config')

window.onload = () => {
    const matrix = container.querySelectorAll('.box')
    matrix.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black'
    }))
}
 
function createGrid(col, rows){
    for(let i = 0; i < (col*rows); i++){
        const div = document.createElement('div')
        div.style.border = '1px solid black'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
createGrid(20,20);

function resetButton(){
    btnReset.textContent = 'Reset'
    btnReset.addEventListener('click', () => {
        reset();
        createGrid(20,20);
        invisColour();
        blackColour();
        grayColour();
        rgbColour();
        removeColour(); 
    })
    configContainer.appendChild(btnReset).classList.add('btn')
}
resetButton();

function gridSize(){
    btnGridSize.textContent = 'Grid size'
    btnGridSize.addEventListener('click', () => {
        let matrixSize = prompt('Size: ')
        if (matrixSize === null || matrixSize < 1){
            reset();
            createGrid(30,30);
            invisColour();
            blackColour();
            grayColour();
            rgbColour();      
            removeColour();   
        } else {
            reset();
            createGrid(matrixSize,matrixSize);
            invisColour();
            blackColour();
            grayColour();
            rgbColour();
            removeColour(); 
        }
    })
    configContainer.appendChild(btnGridSize).classList.add('btn')
}
gridSize();

function invisColour(){
    const matrix = container.querySelectorAll('.box')
    btnInvis.textContent = 'Invisible'
    btnInvis.addEventListener('click', () => {
        matrix.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'lightskyblue'
            box.style.border = 'none'
        }))
    })
    configContainer.appendChild(btnInvis).classList.add('btn')
} 
invisColour();


function blackColour(){
    const matrix = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click', () => {
        matrix.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black'
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
} 
blackColour();

function grayColour(){
    const matrix = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click', () => {
        matrix.forEach(box => box.addEventListener('mouseover', () => {
            let RandNum = Math.floor(Math.random() * 256);
            box.style.background = `rgb(${RandNum},${RandNum},${RandNum})`
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
} 
grayColour();

function rgbColour(){
    const matrix = container.querySelectorAll('.box')
    btnColour.textContent = 'Colour'
    btnColour.addEventListener('click', () => {
        matrix.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            box.style.background = `rgb(${R},${G},${B})`
        }))
    })
    buttonsContainer.appendChild(btnColour).classList.add('btn')
} 
rgbColour();

function removeColour(){
    const matrix = container.querySelectorAll('.box')
    btnErase.textContent = 'Eraser'
    btnErase.addEventListener('click', () => {
        matrix.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'transparent'
        }))
    })
    buttonsContainer.appendChild(btnErase).classList.add('btn')
} 
removeColour();

function reset(){
    const matrix = container.querySelectorAll('.box')
    matrix.forEach(box =>{
        box.remove();
    })
}
