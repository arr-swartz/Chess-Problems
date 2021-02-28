class Queen{
  constructor( x, y, x1, y1, path, psize){
    this.row = x;
    this.column = y;
    this.piece = loadImage(path);
    this.size = psize;
    this.drawQueen();
    this.xcoordinate = x1;
    this.ycoordinate = y1;
  }
  
  changeQueenCoordinates(x, y, x1, y1){
    this.row = x;
    this.column = y;
    this.xcoordinate = x1;
    this.ycoordinate = y1;
  }
  
  drawQueen(){
    image(this.piece, this.row, this.column, this.size, this.size);
  }
}
