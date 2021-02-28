var canvasSize = 450;
var boardSize = 400;
var margin = (canvasSize - boardSize)/2;
var numOfQueens = 8;
var pieceMargin = (boardSize/numOfQueens)/4;
var pieceSize = (boardSize/numOfQueens)/2;
var Board = new chessBoard(numOfQueens, boardSize);
var QueenS = []
var iterator = 0;
var result = [];

function setup() {
  createCanvas(canvasSize, canvasSize + 50);
  Board.createBoard(margin);
  var i;
  for(i = 0;i < numOfQueens;i++){
    QueenS.push(new Queen(Board.canvas[i][0].startX + pieceMargin, Board.canvas[i][0].startY + pieceMargin, i, 0, "./queen.svg", pieceSize));
    Board.canvas[i][0].changeStatus(true);
  }
  var obj = new NQueenProblem(numOfQueens);
  result = obj.getResultantPositions();
}

function mousePressed(){
  iterator = (iterator + 1)%result.length;
  var q;
  for(q = 0;q < numOfQueens;q++){
    Board.canvas[QueenS[q].xcoordinate][QueenS[q].ycoordinate].changeStatus(false);
    var xCoord = result[iterator][q][0];
    var yCoord = result[iterator][q][1];
    var r = Board.canvas[xCoord][yCoord].startX + pieceMargin;
    var c = Board.canvas[xCoord][yCoord].startY + pieceMargin;
    Board.canvas[xCoord][yCoord].changeStatus(true);
    QueenS[q].changeQueenCoordinates(r, c, xCoord, yCoord);
  }
}

function draw() {
  background('#DC7633');
  Board.drawBoard();
  fill(255, 255, 255);
  textSize(12);
  text('solution : '+(iterator+1), margin+10, canvasSize + 10);
  noFill();
  var q;
  for(q = 0;q < numOfQueens;q++){
    QueenS[q].drawQueen();
  }
}