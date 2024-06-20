var listItems = document.querySelectorAll('.button li');

// Add event listeners to each list item
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseover', function() {
        // Change the style when the mouse is over the item
        // this.style.backgroundColor = '#333'; // Change the color as you like
        this.style.borderBottom = '2px solid #ff004f'; // Change the color as you like
    });

    listItems[i].addEventListener('mouseout', function() {
        // Reset the style when the mouse leaves the item
        this.style.borderBottom = 'none';
    });
}