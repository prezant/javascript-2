/*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */

    console.log("Event triggered!"); // Check if the event is triggering
    console.log("Alt text: " + previewPic.alt); // Log the alt text
    console.log("Source: " + previewPic.src); // Log the source

    // Change the text of the element with id 'image'
    document.getElementById('image').innerText = previewPic.alt;

    // Change the background image of the element with id 'image'
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

}


function unDo() {
    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
   
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */

    // Reset the background image
    document.getElementById('image').style.backgroundImage = "url('')";

    // Reset the text
    document.getElementById('image').innerText = "Hover over an image below to display here.";

}

document.querySelectorAll('.preview').forEach(img => {
    img.addEventListener('mouseover', function () {
        upDate(this);
    });

    img.addEventListener('mouseout', function () {
        undo();
    });
});








// Function to add tabindex attributes
function addTabIndex() {
    const images = document.querySelectorAll('.preview');
    images.forEach((img, index) => {
        img.setAttribute('tabindex', index + 1); // Add tabindex starting from 1
        console.log(`Added tabindex=${index + 1} to image with alt="${img.alt}"`);
    });
}

// Add event listeners for mouse and keyboard events
function addEventListeners() {
    const images = document.querySelectorAll('.preview');
    images.forEach(img => {
        // Mouse events
        img.addEventListener('mouseover', function() {
            upDate(this);
        });
        img.addEventListener('mouseout', function() {
            undo();
        });

        // Keyboard events
        img.addEventListener('focus', function() {
            upDate(this);
        });
        img.addEventListener('blur', function() {
            undo();
        });
    });
}

// Onload function
window.onload = function() {
    console.log("Page loaded!"); // Log that the page has loaded
    addTabIndex(); // Add tabindex attributes
    addEventListeners(); // Add event listeners
};




/*   upDate()
  // Get the main image div
    let mainImage = document.getElementById("image");
 
    // Update background image
    mainImage.style.backgroundImage = `url(${previewPic.src})`;
 
    // Update text to alt attribute of the hovered image
    mainImage.innerText = previewPic.alt;
*/


/*  unDo()
// Get the main image div
    let mainImage = document.getElementById("image");
 
    // Reset background image
    mainImage.style.backgroundImage = "url('')";
 
    // Reset text
    mainImage.innerText = "Hover over an image below to display here.";
    
 */
