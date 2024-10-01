import kaboom from "kaboom";
export const k = kaboom({
    global: false,
    touchToMouse: true, //so we can use the same on mobile
    canvas: document.getElementById('game'),
})