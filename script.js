function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    document.getElementById('captcha').innerText = `${num1} + ${num2}?`;
}

function validateCaptcha() {
    const userResult = document.getElementById('captchaInput').value;
    const [num1, num2] = document.getElementById('captcha').innerText.split('+').map(num => parseInt(num));

    if(userResult == num1 + num2) {
        displayResult(true);
    } else {
        displayResult(false);
    }
}

function displayResult(success) {
    const responseMessage = document.getElementById('responseMessage');
    const form = document.getElementById('contactForm');

    if(success) {
        responseMessage.innerText = `спасибо, ${form.name.value} (e-mail ${form.email.value})! ваше сообщение отправлено!`;
    } else {
        responseMessage.innerText = `проверка не пройдена. попробуйте еще раз`;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    generateCaptcha();
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateCaptcha();
})
