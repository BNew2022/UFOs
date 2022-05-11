// imprt the data from data.js
const tableData = data;
// reference the HTML table using D3
var tbody = d3.select("tbody");

fuction buildTable(data){
  // First, clear out any existing data
    tbody.html("");
}
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a row to the table body


    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) =>{
        let cell = row.append("td");
        cell.text(val);
    }
   ;)
});