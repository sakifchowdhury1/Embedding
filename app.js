// Creating constants for later
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let listSheets;
let dashboard;

// Logging information about workbook
function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);
}

// Run the function when the workbook becomes interactive

viz.addEventListener("firstinteractive", logWorkbookInformation());
