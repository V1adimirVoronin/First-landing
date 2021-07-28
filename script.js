'use strict';

function getCoords(elem) {
        let box = elem.getBoundingClientRect().top + pageYOffset;
        return Math.trunc(box);
}

let actDotPosicion = 'dot1';
let sectionList = document.querySelectorAll('div.section');
let startActDotPosicion = getCoords(sectionList[0]);
let sectionMove = getCoords(sectionList[1])-startActDotPosicion;

document.getElementById('scroller').onscroll = function () {
        let sectionCoord = getCoords(sectionList[0]);
        if (sectionCoord == startActDotPosicion) {
                let a = document.getElementById('dot1');
                if (a != null) {
                        a.src = 'pic/active-dot.png';
                        let b = document.getElementById('active-dot');
                        b.src = 'pic/dot.png';
                        b.id = actDotPosicion;
                        actDotPosicion = a.id;
                        a.id = 'active-dot';
                };
        } else if (sectionCoord == startActDotPosicion-sectionMove) {
                let a = document.getElementById('dot2');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        } else if (sectionCoord == startActDotPosicion-sectionMove*2) {
                let a = document.getElementById('dot3');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        } else if (sectionCoord == startActDotPosicion-sectionMove*3) {
                let a = document.getElementById('dot4');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        } else if (sectionCoord == startActDotPosicion-sectionMove*4) {
                let a = document.getElementById('dot5');
                if (a != null) {
                        a.src = 'pic/active-dot.png';
                        let b = document.getElementById('active-dot');
                        b.src = 'pic/dot.png';
                        b.id = actDotPosicion;
                        actDotPosicion = a.id;
                        a.id = 'active-dot';
        };
        concole.log(sectionCoord);
}
