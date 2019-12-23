function Canvas2D(){
    this._canvas = document.getElementById('screen');
    this._canvasContext = this._canvas.getContext('2d');
};

Canvas2D.prototype.clear = function(){
    this._canvasContext.clearRect(0,0,this._canvas.width, this._canvas.height);
};

Canvas2D.prototype.drawImage = function(image, position){
    this._canvasContext.drawImage(image, position.x, position.y)
};
// testing

let canvas = new Canvas2D();

// let image = new Image();
// image.src = "./assets/sprites/spr_background4.png";


// setTimeout(()=> {
//     canvas.drawImage(image, {x: 0, y:0})
//     // canvas.clear()
// }, 1000);