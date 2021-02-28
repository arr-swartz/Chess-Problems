class chessBoard{
  constructor(number,bsize){
    this.n = number;
    this.boardSize = bsize;
  }
  
  createBoard(margin){
    this.canvas = [];
    var i,j;
    var areaPerRow = this.boardSize/ this.n;
    var rowStartColor = 0;
    for(i = 0;i < this.n;i++){
      this.canvas.push([]);
      var columnColor = rowStartColor;
      for(j = 0;j < this.n;j++){
        var sx = areaPerRow * i + margin;
        var sy = areaPerRow * j + margin;
        this.canvas[i].push(new block(false, sx, sy, areaPerRow, columnColor));
        columnColor = 1 - columnColor;
      }
      rowStartColor = 1 - rowStartColor;
    }
  }
  
  drawBoard(){
    var i,j;
    for(i = 0;i < this.n;i++){
      for(j = 0;j < this.n;j++){
        var block = this.canvas[i][j];
        if(block.hasQueen == true){
          fill(255, 255, 0);
          rect(block.startX, block.startY, block.width, block.width);
          noFill();
        }else if(block.color == 0){
          fill(0, 0, 0);
          rect(block.startX, block.startY, block.width, block.width);
          noFill();
        }else{
          fill(255, 255, 255);
          rect(block.startX, block.startY, block.width, block.width);
          noFill();
        }
      }
    }
  }
}
