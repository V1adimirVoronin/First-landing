'use strict';

function getCoords(elem) {
        let box = elem.getBoundingClientRect().top + pageYOffset;
        return box;
}

let actDotPosicion = 'dot1';
let startActDotPosicion = getCoords(document.getElementById('section1'));

document.getElementById('scroller').onscroll = function () {
        let sectionCoord = getCoords(document.getElementById('section1'));
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
        } else if (sectionCoord == startActDotPosicion-365) {
                let a = document.getElementById('dot2');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        } else if (sectionCoord == startActDotPosicion-365*2) {
                let a = document.getElementById('dot3');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        } else if (sectionCoord == startActDotPosicion-365*3) {
                let a = document.getElementById('dot4');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        } else if (sectionCoord == startActDotPosicion-365*4) {
                let a = document.getElementById('dot5');
                a.src = 'pic/active-dot.png';
                let b = document.getElementById('active-dot');
                b.src = 'pic/dot.png';
                b.id = actDotPosicion;
                actDotPosicion = a.id;
                a.id = 'active-dot';
        };
}