'use strict'

function getCoords(elem) {
        let box = elem.getBoundingClientRect().top + pageYOffset;
        return Math.trunc(box);
}

function dotMove() {
        let a = document.getElementById(n);
        console.log(a);
        if (a != null) {
            a.src = 'pic/active-dot.png';
            let b = document.getElementById('active-dot');
            console.log(b);
            b.src = 'pic/dot.png';
            b.id = actDotPosicion;
            console.log(b);
            actDotPosicion = a.id;
            a.id = 'active-dot';
            console.log(a);
        };
}

let actDotPosicion = 'dot1';
let sectionList = document.querySelectorAll('div.section');
let startActDotPosicion = getCoords(sectionList[0]);
let sectionMove = getCoords(sectionList[1])-startActDotPosicion;
let n;

document.getElementById('scroller').onscroll = function () {
        let sectionCoord = getCoords(sectionList[0]);
        if (sectionCoord == startActDotPosicion) {
                n = 'dot1';
                console.log(n);
        } else if (sectionCoord == startActDotPosicion-sectionMove) {
                n = 'dot2';
                console.log(n);
        } else if (sectionCoord == startActDotPosicion-sectionMove*2) {
                n = 'dot3';
                console.log(n);
        } else if (sectionCoord == startActDotPosicion-sectionMove*3) {
                n = 'dot4';
                console.log(n);
        } else if (sectionCoord == startActDotPosicion-sectionMove*4) {
                n = 'dot5';
                console.log(n);
        };
        dotMove();
console.log(sectionCoord);
};
