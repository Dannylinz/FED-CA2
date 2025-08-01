// List of trash items that appear on the Earth
const trashItems = ["images/trash1.png", "images/trash2.png", "images/trash3.png"];

// Variables to keep track of the game score
let score = 0;
const scoreElement = document.getElementById("score");

// Function to add a trash item to the Earth at a random position
function addTrash() {
    const earthElement = document.getElementById("earth");
    const trashImg = document.createElement("img");
    trashImg.src = trashItems[Math.floor(Math.random() * trashItems.length)];
    trashImg.classList.add("trash-item");
    const earthWidth = earthElement.offsetWidth;
    const earthHeight = earthElement.offsetHeight;
    trashImg.style.left = Math.random() * (earthWidth - 30) + "px";
    trashImg.style.top = Math.random() * (earthHeight - 30) + "px";
    earthElement.appendChild(trashImg);

    // Add click event listener to remove the trash when clicked and update the score
    trashImg.addEventListener("click", function () {
        this.remove();
        score++;
        scoreElement.innerText = "Score: " + score;
    });
}

// Function to continuously add trash items at a random interval
function startGame() {
    setInterval(addTrash, 1000);
}

// Start the game when the page loads
window.onload = startGame;