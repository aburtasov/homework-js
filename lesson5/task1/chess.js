
const field = document.querySelector('.main_div');

let isBlack = true;

for (y = 0; y < 8; y++) {
    isBlack = (y % 2 === 1) ? false : true;
    for(x = 0; x  <  8; x++) {
        const col = document.createElement('div');

        col.classList.add('col');
        col.classList.add(isBlack ? 'b': 'w');

        isBlack = !isBlack;
        field.appendChild(col);
    }
}