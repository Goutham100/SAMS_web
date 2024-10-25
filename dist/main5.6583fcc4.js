let selectedOption = 0;
function selectOption(optionNumber) {
    selectedOption = optionNumber;
    console.log("Selected Option:", selectedOption);
    if (selectedOption === 2) {
        // Show loading message
        document.getElementById("loading-message").style.display = "block";
        // Set a delay before showing plant info and hiding buttons
        setTimeout(function() {
            // Hide loading message
            document.getElementById("loading-message").style.display = "none";
            // Show the plant information
            document.getElementById("plant-info").style.display = "block";
            // Hide the button container and the title
            const buttonContainer = document.getElementById("button-container");
            const pageTitle = document.getElementById("page-title");
            if (buttonContainer && pageTitle) {
                buttonContainer.style.display = "none";
                pageTitle.style.display = "none";
            } else console.log("Button container or page title not found");
        }, 5000); //delay
    }
}

//# sourceMappingURL=main5.6583fcc4.js.map
