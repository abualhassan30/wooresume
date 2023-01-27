var currentDate = new Date();
var pastDate = new Date();
pastDate.setDate(currentDate.getDate() - 17);
var options = {year: "numeric", month: "short", day: "numeric"};
document.getElementById("date").innerHTML = pastDate.toLocaleDateString("en-US", options);

function printBlackAndWhite() {
    // Get the current stylesheet
    var stylesheet = document.styleSheets[0];
    
    // Create a new stylesheet for printing
    var printStylesheet = document.createElement("style");
    printStylesheet.media = "print";
    
    // Add the black and white rule to the new stylesheet
    printStylesheet.innerHTML = "* { -webkit-print-color-adjust: exact !important; }";
    
    // Append the new stylesheet to the head of the document
    document.head.appendChild(printStylesheet);
    
    // Call the browser's print function
    window.print();
    
    // Remove the new stylesheet after printing
    document.head.removeChild(printStylesheet);
  }
  
