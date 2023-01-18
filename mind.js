console.log("Connected");
function drum(val){
    switch(val){
        case 'e':
        var sound1 = new Audio('Sounds/e.wav')
        sound1.play();
        break;

        case 'r':
        var sound2 = new Audio('Sounds/r.wav')
        sound2.play();
        break;

        case 'f':
        var sound3 = new Audio('Sounds/f.wav')
        sound3.play();
        break;

        case 'g':
        var sound4 = new Audio('Sounds/g.wav')
        sound4.play();
        break;

        case 'h':
        var sound5 = new Audio('Sounds/h.wav')
        sound5.play();
        break;

        case 'v':
        var sound6 = new Audio('Sounds/vb.wav')
        sound6.play();
        break;

        case 'b':
        var sound7 = new Audio('Sounds/vb.wav')
        sound7.play();
        break;

        case 'j':
        var sound8 = new Audio('Sounds/j.wav')
        sound8.play();
        break;

        case 'i':
        var sound9 = new Audio('Sounds/i.wav')
        sound9.play();
        break;

        case 'k':
        var sound10 = new Audio('Sounds/k.wav')
        sound10.play();
        break;

        default:console.log(val);
    }
}