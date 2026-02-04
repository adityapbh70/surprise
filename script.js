const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const audio = document.getElementById('bgMusic');
let clickCount = 0;

// 1. Music Trigger on first click
window.addEventListener('click', () => {
    audio.play();
}, { once: true });

// 2. Create Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 4000);
}
setInterval(createHeart, 400);

// 3. Handle No Button Clicks
function handleNo() {
    clickCount++;
    
    // Yes button ko bada karte jao
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 10) + "px";
    yesBtn.style.padding = (currentSize + 5) + "px " + (currentSize * 2) + "px";

    if (clickCount === 1) {
        noBtn.style.left = "80%";
        noBtn.innerText = "Are you sure? 🤨";
    } else if (clickCount === 2) {
        noBtn.style.left = "-20%";
        noBtn.innerText = "Pachhtao gi! 🥺";
    } else if (clickCount === 3) {
        noBtn.style.top = "-150px";
        noBtn.innerText = "Last chance! 😢";
    } else {
        noBtn.style.display = "none";
    }
}

// 4. Celebration Logic
function celebrate() {
    document.body.innerHTML = `
        <div style="text-align:center; background:white; padding:50px; border-radius:20px; border:5px solid #ff4d6d;">
            <h1 style="font-size:80px;">💖🥰🎉</h1>
            <h1 style="color:#ff4d6d; font-size:40px;">I KNEW IT! <br> I LOVE YOU ADITI! ❤️</h1>
            <p style="font-size:20px; color:#333;">Prepare for the best Valentine's ever!</p>
        </div>`;
    document.body.style.backgroundColor = "#ffb6c1";
}