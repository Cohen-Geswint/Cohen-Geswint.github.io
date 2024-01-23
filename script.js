function showMessage() {
    document.getElementById('main-container').classList.add('hidden');
    document.getElementById('message-container').classList.remove('hidden');
}

function moveButton() {
    // Implement the logic to move the 'No' button to a random spot
    var button = document.getElementById('noBtn');
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

function sendMessage() {
    // Implement the logic to send the message
    var message = document.getElementById('messageInput').value;
    alert('Message sent: ' + message);
}
function goToNextPage() {
    // Navigate to the next page (replace 'nextpage.html' with the actual file name)
    window.location.href = 'nextpage.html';
  }
  
  
  