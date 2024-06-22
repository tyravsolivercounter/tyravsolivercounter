document.addEventListener("DOMContentLoaded", () => {
    // Initialize counters from localStorage
    tyraCount = localStorage.getItem('tyraCount') ? parseInt(localStorage.getItem('tyraCount')) : 0;
    oliverCount = localStorage.getItem('oliverCount') ? parseInt(localStorage.getItem('oliverCount')) : 0;

    // Update the display
    document.getElementById('tyra-count').innerText = tyraCount;
    document.getElementById('oliver-count').innerText = oliverCount;
});

let tyraCount = 0;
let oliverCount = 0;

function incrementTyra() {
    tyraCount++;
    document.getElementById('tyra-count').innerText = tyraCount;
    localStorage.setItem('tyraCount', tyraCount);
    showHearts();
}

function incrementOliver() {
    oliverCount++;
    document.getElementById('oliver-count').innerText = oliverCount;
    localStorage.setItem('oliverCount', oliverCount);
}

function showHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerText = '❤️';
        heart.classList.add('heart');
        heart.style.top = Math.random() * 100 + '%';
        heart.style.left = Math.random() * 100 + '%';
        heartsContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
