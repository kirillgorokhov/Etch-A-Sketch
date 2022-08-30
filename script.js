let columns = 16;
let rows = 16;
let grid = document.getElementById('grid');

for (let i = 0; i <= columns; i++) {
    column = document.createElement('div');
    column.className = 'column';
    for (let j = 0; j <= rows; j++) {
        row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    }
    grid.appendChild(column);
}