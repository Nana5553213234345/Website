// scripts.js
let correctCode = {
    'layer1': 'secretcode1', // Replace with your actual code
    'layer2': 'secretcode2'  // Replace with your actual code
};

let targetLayer = '';

function openPopup(layer) {
    targetLayer = layer;
    document.getElementById('popup-box').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-box').style.display = 'none';
}

function checkCode() {
    let enteredCode = document.getElementById('code-input').value;
    if (enteredCode === correctCode[targetLayer]) {
        window.location.href = targetLayer + '.html'; // Redirect to the correct layer
    } else {
        glitchEffect();
        document.getElementById('code-input').value = ''; // Clear the input
    }
}

function glitchEffect() {
    let popupBox = document.getElementById('popup-box');
    popupBox.classList.add('glitch');
    setTimeout(() => {
        popupBox.classList.remove('glitch');
    }, 900); // Duration of the glitch effect
}
