/*Создать html-страницу для ввода имени пользователя. 
Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input*/

// не понял как делать . сделал так
let input1 = document.querySelector('#inputIn')
let input2 = document.querySelector('#inputOut')
let btn = document.querySelector('#btn')
let onlyLetters = []
function checkingText() {
    input1.value.split('').forEach((el) => {
        if(!parseInt(el)) {
            onlyLetters.push(el)
        } 
    }
    )
    console.log(onlyLetters.join(''))
    input2.value = onlyLetters.join('')     // 
    // input1.value = onlyLetters.join('')   ну или результат в той же строке. выше закометируй
    onlyLetters = []   // очищаю массив
}
btn.addEventListener('click', checkingText)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Создать html-страницу с кнопкой Открыть и модальным  окном. На модальном окне должен быть текст и кнопка Закрыть. 
Изначально модальное окно не отображается. При клике на кнопку Открыть появляется модальное окно, на кнопку – исчезает. */

let openButton = document.querySelector('#btnOpenModal')    // получил кнопку по id
let modal = document.querySelector('.modal')                // получил элемент по классу
let сloseButton = document.querySelector('#btnСloseModal')  // получаем элемент кнопки закрытия 
function deleteСlass() {                                    // функция проверки и удаления класса
    modal.classList.remove('hidden-block')
} 
function addСlass() {
    modal.classList.add('hidden-block')
}

openButton.addEventListener('click', deleteСlass)         // создаю событие по клику на кнопку открыть
сloseButton.addEventListener('click', addСlass)           // создаю событие по клику на кнопку закрыть

/*Создать html-страницу с футбольным полем, которое зани-
мает всю ширину и высоту экрана, и мячом размером 100 на 100 
пикселей. 
Сделать так, чтобы при клике мышкой по полю, мяч плавно 
перемещался на место клика. Учтите: необходимо, чтобы центр 
мяча останавливался именно там, где был совершен клик мышкой. 
Также предусмотрите, чтобы мяч не выходил за границы поля.*/

let field = document.querySelector('.field')
let ball = document.querySelector('.ball')
function positionBoll(event) {
    // console.log(event.layerX)
    // console.log(event.layerY)
    ball.style.cssText = `left: ${event.layerX}px; top: ${event.layerY}px`
}
field.addEventListener('click', positionBoll)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Создать html-страницу со светофором и кнопкой, которая 
переключает светофор на следующий цвет.*/

let btnSwitch = document.querySelector('#btnSwitch')
let lightSignal = document.querySelectorAll('.traffic-light div')
let currentSignal = 'red'         // будем сохранять цвета светофора
function changingSignal() {
        if(currentSignal == 'red') {
            lightSignal[0].classList.remove('red-signal')
            lightSignal[1].classList.add('yellow-signal')
            currentSignal = 'yellow'
            return
        }
        if(currentSignal == 'yellow') {
            lightSignal[1].classList.remove('yellow-signal')
            lightSignal[2].classList.add('green-signal')
            currentSignal = 'green'
            return
        }
        if(currentSignal == 'green') {
            lightSignal[2].classList.remove('green-signal')
            lightSignal[0].classList.add('red-signal')
            currentSignal = 'red'
            return
        }
}
btnSwitch.addEventListener('click', changingSignal)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*Создать html-страницу со списком книг. 
При щелчке на книгу, цвет фона должен меняться на оранжевый.  */

let listBooks = document.querySelector('.list-books')
let listItem = document.querySelectorAll('.books p')
function selectingElement(event) {
    // нужно добавить проверку то что кликнули по элементу <p> НЕ ЗНАЮ КАК ПОДСКАЖИТЕ 
    listItem.forEach((el)=>{   // Перебираем элементы и удаляем у всех класс active
        el.classList.remove('active')
    }
    )
    event.target.classList.add('active')    

}
listBooks.addEventListener('click', selectingElement)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


