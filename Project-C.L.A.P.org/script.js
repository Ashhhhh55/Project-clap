let isEnglish = localStorage.getItem('isEnglish') === 'false' ? false : true;

function toggleLanguage() {
    isEnglish = !isEnglish;
    localStorage.setItem('isEnglish', isEnglish);
    updateLanguageDisplay();
}

function updateLanguageDisplay() {
    const contactBtn = document.getElementById('contact-btn');
    contactBtn.textContent = isEnglish ? "Contact Us" : "تواصل معنا";

    const enElements = document.querySelectorAll('.lang-en');
    const arElements = document.querySelectorAll('.lang-ar');

    enElements.forEach(el => {
        el.classList.toggle('lang-visible', isEnglish);
    });

    arElements.forEach(el => {
        el.classList.toggle('lang-visible', !isEnglish);
    });

    const btn = document.querySelector('.language-btn');
    btn.style.background = isEnglish ? 
        'linear-gradient(45deg, #FF6B6B, #4ECDC4)' : 
        'linear-gradient(45deg, #4ECDC4, #FF6B6B)';

    btn.style.padding = '10px 20px';
    btn.style.fontSize = '16px';
}

document.addEventListener('DOMContentLoaded', () => {
    updateLanguageDisplay();
});

function toggleCode() {
    let codeBlock = document.getElementById('arduino-code');
    codeBlock.classList.toggle('show');
}

function copyCode(btn) {
    let codeText = document.querySelector('.code-block code').innerText;
    navigator.clipboard.writeText(codeText);
    btn.textContent = "Copied!";
    btn.style.background = "#3498db";
    setTimeout(() => {
        btn.textContent = "Copy Code";
        btn.style.background = "#2ecc71";
    }, 2000);

    btn.style.padding = '10px 20px';
    btn.style.fontSize = '16px';
}

function toggleContactPanel() {
    const contactPanel = document.getElementById('contact-panel');
    contactPanel.classList.toggle('show');
}

// Show English text by default
document.querySelectorAll('.lang-en').forEach(el => {
    el.classList.add('lang-visible');
});