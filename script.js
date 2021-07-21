'use strict';
alert ('Эта страница является тренировочной!\nСодержащийся в ней контент не имеет отношения к действительности!\n\nThis page is just for practice!\nThe content it contains is irrelevant!');

function getCoords(elem) {
        let box = elem.getBoundingClientRect().top + pageYOffset;
        return box;
}

let actDotPosicion = 'dot1';

document.getElementById('scroller').onscroll = function () {
        let sectionCoord = getCoords(document.getElementById('section1'));
        if (sectionCoord == 5021) {
                let a = document.getElementById('dot1');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        };
        if (sectionCoord == 4656) {
                let a = document.getElementById('dot2');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        };
        if (sectionCoord == 4291) {
                let a = document.getElementById('dot3');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        };
        if (sectionCoord == 3926) {
                let a = document.getElementById('dot4');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        };
        if (sectionCoord == 3561) {
                let a = document.getElementById('dot5');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        };
        console.log('script working');
}
