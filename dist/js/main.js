let items = document.querySelectorAll('.items');
let btns = document.querySelectorAll('.bottom-navigation div');
let cartBtn = document.querySelector('.cartBtn');

let cardWrapper = document.getElementById('card-wrapper');
let cards = cardWrapper.getElementsByClassName('card');
let left  = document.querySelector('.left');
let right = document.querySelector('.right');

//  Display and Hide Navigation Function for Mobile Device:
function DisplayAndHide(num) {
    if (items[num].classList.contains('display')) {
        //  remove display class when click on button second time:
        items[num].classList.remove('display');
        items[num].childNodes[1].childNodes[1].classList.remove('display');
    } else {
        //  add display class
        items[num].classList.add('display');
        items[num].childNodes[1].childNodes[1].classList.add('display');

        //  remove display class  when click on CROSS ICON
        items[num].childNodes[1].childNodes[1].childNodes[3].addEventListener('click', () => {
            items[num].classList.remove('display');
            items[num].childNodes[1].childNodes[1].classList.remove('display');
        })

        // Remove display classes from Rest of items:
        for (let i = 0; i <= 3; i++) {
            if (i === num) {
                continue;
            } else {
                if (items[i].classList.contains('display')) {
                    items[i].classList.remove('display');
                    items[i].childNodes[1].childNodes[1].classList.remove('display');
                }
            }
        }
    }
}


//  on click event on Bottom Navigation:
btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.target.parentElement.classList.contains('menuBtn')) {
            DisplayAndHide(0);
        }
        if (event.target.parentElement.classList.contains('categoryBtn')) {
            DisplayAndHide(1);
        }
        if (event.target.parentElement.classList.contains('searchBtn')) {
            DisplayAndHide(2);
        }
        if (event.target.parentElement.classList.contains('cartBtn')) {
            DisplayAndHide(3);
        }
    })
});



right.addEventListener('click', () => {
    cardWrapper.append(cards[0])
})

left.addEventListener('click', () => {
    cardWrapper.prepend(cards[cards.length-1])
})


