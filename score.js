const p1Button = document.querySelector('#p1score');
const p2Button = document.querySelector('#p2score');
const p1Disp = document.querySelector('#p1disp');
const p2Disp = document.querySelector('#p2disp');
const reset = document.querySelector('#reset');
const winScore = document.querySelector('#slct');


let p1Score = 0;
let p2Score = 0;
let winningScore = 6;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Disp.classList.add('has-text-success')
            p2Disp.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Disp.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Disp.classList.add('has-text-success');
            p1Disp.classList.add('has-text-danger');
            p2Button.disabled = true;
            p1Button.disabled = true;
        }
        p2Disp.textContent = p2Score;
    }
})

winScore.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    p1Disp.textContent = 0;
    p2Disp.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Disp.classList.remove('has-text-success', 'has-text-danger')
    p2Disp.classList.remove('has-text-danger', 'has-text-success')
    p2Button.disabled = false;
    p1Button.disabled = false;

})
reset.addEventListener('click', function () {
    p1Disp.classList.remove('has-text-success', 'has-text-danger')
    p2Disp.classList.remove('has-text-danger', 'has-text-success')
    p1Disp.textContent = 0;
    p2Disp.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p2Button.disabled = false;
    p1Button.disabled = false;
})