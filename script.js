const clickBtn = document.getElementById('clickBtn');
const clickCount = document.getElementById('clickCount');
let clicks = 0;

clickBtn.addEventListener('click', () => {
    clicks++;
    clickCount.textContent = `Clicks: ${clicks}`;

    if (clicks === 3) {
        window.close();
    }
});