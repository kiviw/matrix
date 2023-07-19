const canvas = document.getElementById("matrix-canvas");
const context = canvas.getContext("2d");
const hiddenLink = document.getElementById("hidden-link");

// Set canvas size to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate random matrix characters
const matrixChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const matrixCharsArray = matrixChars.split("");

// Initialize matrix column positions
const columnPositions = Array(Math.floor(canvas.width / 15)).fill(0);

// Function to draw the matrix animation
function drawMatrix() {
    // Clear canvas
    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Set matrix character color and font
    context.fillStyle = "#0f0";
    context.font = "15px monospace";

    // Iterate through each column
    for (let i = 0; i < columnPositions.length; i++) {
        // Generate random matrix character
        const matrixChar = matrixCharsArray[Math.floor(Math.random() * matrixCharsArray.length)];

        // Draw the matrix character at the current column position
        context.fillText(matrixChar, i * 15, columnPositions[i] * 15);

        // Increment the column position
        if (columnPositions[i] * 15 > canvas.height && Math.random() > 0.975) {
            // Reset the column position if it goes beyond the canvas height
            columnPositions[i] = 0;
        } else {
            // Increment the column position
            columnPositions[i]++;
        }

        // Check if the hidden link should be revealed
        if (columnPositions[i] * 15 === canvas.height && i === Math.floor(columnPositions.length / 2)) {
            hiddenLink.hidden = false;
        }
    }

    // Repeat the animation on the next frame
    requestAnimationFrame(drawMatrix);
}

// Start the matrix animation
drawMatrix();
  
