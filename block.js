class block{
  constructor(hq, sX, sY, w, clr){
    this.startX = sX;
    this.width = w;
    this.hasQueen = hq;
    this.startY = sY;
    this.color = clr;
  }
  
  changeStatus(hq){
    this.hasQueen = hq;
  }
}