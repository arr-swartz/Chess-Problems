class NQueenProblem{
  
  constructor(n){
    this.n = n;
    this.result = [];
    this.solution = [];
    this.leftDiagonal = [];
    this.rightDiagonal = [];
    this.rows = [];
    var i,j;
    for(i = 0;i < this.n;i++){
      this.solution.push([]);
      this.rightDiagonal.push(0);
      this.rightDiagonal.push(0);
      this.leftDiagonal.push(0);
      this.leftDiagonal.push(0);
      this.rows.push(0);
      for(j = 0;j < this.n;j++){
        this.solution[i].push(0);
      }
    }
  }
  
  extractCoordinate(){
    var i,j;
    var res = [];
    for(i = 0;i < this.n;i++){
      for(j = 0;j < this.n;j++){
        if(this.solution[i][j] == 1){
          res.push([i,j]);
        }
      }
    }
    return res;
  }
  
  solveProblem(col){
    if(col == this.n){
      var x = this.extractCoordinate();
      this.result.push(x);
      return;
    }
    var i;
    for(i = 0;i < this.n;i++){
      if(this.rows[i] == 0 && this.leftDiagonal[i - col + this.n -1] == 0 && this.rightDiagonal[i + col] == 0){
        this.solution[i][col] = 1;
        this.rows[i] = 1;
        this.leftDiagonal[i - col + this.n - 1] = 1;
        this.rightDiagonal[i + col] = 1;
        this.solveProblem(col+1);
        this.solution[i][col] = 0;
        this.rows[i] = 0
        this.leftDiagonal[i - col + this.n - 1] = 0
        this.rightDiagonal[i + col] = 0
      }
    }
  }
  
  getResultantPositions(){
    this.solveProblem(0);
    return this.result;
  }
  
}