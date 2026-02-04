const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const audio = document.getElementById('bgMusic');
const typingElement = document.getElementById('typing-text');

let clickCount = 0;
const message = "Aditi, Will you be my Valentine? ❤️";
let speed = 100;
let charIndex = 0;

// 1. Typing Effect Logic
function typeWriter() {
    if (charIndex < message.length) {
        typingElement.innerHTML += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    }
}

// Start typing on load
window.onload = typeWriter;

// 2. Music Trigger
window.addEventListener('click', () => {
    audio.play().catch(() => {});
}, { once: true });

// 3. Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 400);

// 4. Handle No Button (Prank)
function handleNo() {
    clickCount++;
    
    // Button ko shake karein
    noBtn.classList.add('shake');
    setTimeout(() => noBtn.classList.remove('shake'), 200);

    // Yes button ka size badhayein
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 10) + "px";
    yesBtn.style.padding = (currentSize/2 + 5) + "px " + (currentSize + 10) + "px";

    // Random position par bhejein
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    if(clickCount > 5) {
        noBtn.style.display = 'none';
    }
}

// 5. Final Celebration
function celebrate() {
    // Confetti Explosion
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    document.body.innerHTML = `
        <div style="text-align:center; background:white; padding:50px; border-radius:30px; border:5px solid #ff4d6d; box-shadow: 0 0 50px rgba(255,77,109,0.5);">
            <h1 style="font-size:80px; margin:0;">🥰❤️🎉</h1>
            <h1 style="color:#ff4d6d; font-size:45px; margin-top:20px;">I KNEW IT!<br>LOVE YOU ADITI!</h1>
            <p style="font-size:20px; color:#555;">The best day ever starts now!</p>
        </div>`;
    document.body.style.backgroundColor = "#ffb6c1";
}