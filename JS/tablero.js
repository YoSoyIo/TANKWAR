function dibujaTablero2(){

    var c = document.getElementById("myCanvas");

    var ctx = c.getContext("2d");

    var size = c.width;

    var h = c.height;

    c.style.left = "80px";

    c.style.top = "50px";


    var g = 90;

    ctx.fillStyle = "#d9ef9f";

    ctx.fillRect(0, 0, size, size);

    for (let index = 0; index < 8; index++) {

        ctx.moveTo(index * size / 8, 0);

        ctx.lineTo(index * size / 8, size);

    }

    for (let index = 0; index < 8; index++) {

        ctx.moveTo(0, index * size / 8);

        ctx.lineTo(size, index * size / 8);

    }

    ctx.stroke();

}

function reproduceAudio(){
    const audioContext = new AudioContext();
    const element = document.querySelector("audio");
    const source = audioContext.createMediaElementSource(element);
    source.connect(audioContext.destination)
    console.log(source);
    element.play();
}