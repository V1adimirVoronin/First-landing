'use strict';
alert ('Эта страница является тренировочной! \n Содержащийся в ней контент не имеет отношения к действительности! \n \n This page is just for practice! \n The content it contains is irrelevant!');

function getCoords(elem) {
        let box = elem.getBoundingClientRect().top + pageYOffset;
        return box;
}

let sectionCoord = getCoords(document.getElementById('section1'));

document.getElementById('scroller').onscroll = function () {
        console.log(sectionCoord);
}
365