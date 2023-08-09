class Table {
  tableNode;

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
  }

  initTableNode() {
    this.tableNode = document.createElement('table');
    for (let i = 0; i < this.rows; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < this.columns; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
      }
      this.tableNode.appendChild(tr);
    }
  }

  changeSnakeColor(x, y, color) {
    if (x >= 0 && x < this.rows && y >= 0 && y < this.columns) {
      this.tableNode.rows[x].cells[y].style.background = color;
    }
  }

  makeDefault() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.tableNode.rows[i].cells[j].style.background = '#7cf2bd';
      }
    }
  }
}
