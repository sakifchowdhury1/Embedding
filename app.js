// Creating constants for later
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let listSheets;
let dashboard;
let totalSales;
let salesByProduct;
let salesBySegment;
// Logging information about workbook
function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);

  // list of dashboards and sheets
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is ${element.name}`);
  });

  // finding the actual active worksheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);

  // List all of the worksheets within the active sheet
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    worksheetName = element.name;
    console.log(`The worksheet with index ${index} is ${worksheetName}`);
  });

  saleMap = listSheets.find((ws) => ws.name == "SaleMap");
  totalSales = listSheets.find((ws) => ws.name == "Total Sales");
  salesByProduct = listSheets.find((ws) => ws.name == "SalesbyProduct");
  salesBySegment = listSheets.find((ws) => ws.name == "SalesbySegment");
}
// constants for buttons

const oregonWashingtonButton = document.getElementById("oregon_and_washington");
const clearFilterButton = document.getElementById("clear_filter");
const undoButton = document.getElementById("undo");

// functions for when buttons are pressed
function oregonWashFunction() {
  console.log(oregonWashingtonButton.value);
  saleMap.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
}

function clearStateFilter() {
  console.log(clearFilterButton.value);
  saleMap.clearFilterAsync("State");
  totalSales.clearFilterAsync("State");
  salesByProduct.clearFilterAsync("State");
  salesBySegment.clearFilterAsync("State");
}

function undo() {
  console.log(undoButton.value);
  viz.undoAsync();
}

clearFilterButton.addEventListener("click", clearStateFilter);
oregonWashingtonButton.addEventListener("click", oregonWashFunction);
undoButton.addEventListener("click", undo);
// Run the function when the workbook becomes interactive

viz.addEventListener("firstinteractive", logWorkbookInformation);
