import component from './component';
import {
    init,
    update,
    moveJoint,
    getMousePos,
    waist,
    neck
} from './render';

document.body.appendChild(component());

init();
update();

document.addEventListener('mousemove', function (e) {
    var mousecoords = getMousePos(e);
    if (neck && waist) {
        moveJoint(mousecoords, neck, 50);
        moveJoint(mousecoords, waist, 30);
    }
});