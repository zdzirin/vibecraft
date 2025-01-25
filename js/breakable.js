const breakableItems = document.querySelectorAll(".breakable");

// Initialize a Map to track click counts for each element
const clickCounts = new Map();

// Add event listeners to each breakable item
breakableItems.forEach((item) => {
    // initialize breakable child element
    const breakingProgress = document.createElement("img");
    breakingProgress.classList.add("breakable-progress");
    item.appendChild(breakingProgress);

    clickCounts.set(item, 0);

    item.addEventListener("click", () => {
        console.log("clicked an item");
        // Increment the click count for the clicked item
        const currentCount = clickCounts.get(item) + 1;
        clickCounts.set(item, currentCount);

        const currentPercent = Math.floor((currentCount / 3) * 10);
        breakingProgress.src = `images/breakable/breakable-textures-${currentPercent}.png`;

        // Check if the click count has reached 3
        if (currentCount >= 3) {
            // Remove the item from the DOM
            item.classList.add("broken");
        }
    });
});
