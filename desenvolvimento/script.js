function easter(){
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.95 }
    });
    var pop = new Audio('pop.mp3');
    pop.addEventListener('canplaythrough', function() {
    pop.play();
});
}