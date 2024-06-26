document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-game');
    const heartsContainer = document.getElementById('hearts');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 90}%`;
        heart.style.top = `${Math.random() * 90}%`;
        heartsContainer.appendChild(heart);

        heart.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = score;
            heart.remove();
        });

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    startButton.addEventListener('click', () => {
        heartsContainer.innerHTML = '';
        score = 0;
        scoreDisplay.textContent = score;
        const gameInterval = setInterval(createHeart, 1000);

        setTimeout(() => {
            clearInterval(gameInterval);
            alert(`Game over! You collected ${score} hearts!`);
        }, 20000);
    });
});
