// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var trackFilters = {
  datetime: "",
  city: "",
  state: "",
  country: "",
  shape: ""
};
function buildTable(data){
  // First, clear out any existing data
tbody.html("");

// Next, loop through each object in the data
  // and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    }
   );
});
}
// 3. Use this function to update the filters. 
function updateFilters(value,id) {

  // 4a. Save the element that was changed as a variable.

  // 4b. Save the value that was changed as a variable.

  // 4c. Save the id of the filter that was changed as a variable.


  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (id=="datetime"){
    trackFilters["datetime"] = value;
  } else{trackFilters["datetime"]=""}

  if (id=="city"){
    trackFilters["city"] = value;
  } else{trackFilters["city"]=""}
  
  if (id=="state"){
    trackFilters["state"] = value;
  } else{trackFilters["state"]=""}
  
  if (id=="country"){
    trackFilters["country"] = value;
  } else{trackFilters["country"]=""}

  if (id=="shape"){
    trackFilters["shape"] = value;
  } else{trackFilters["shape"]=""}    

  // 6. Call function to apply all filters and rebuild the table
  filterTable();

};
  
// 7. Use this function to filter the table when data is entered.
function filterTable() {

  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;
  const k = Object.keys(trackFilters);
  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  k.forEach((key,index)=>{
    if(trackFilters[key]!=""){
      filteredData = filteredData.filter(row =>row[key] == trackFilters[key]);
     
    };
  });
  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
};

// 2. Attach an event to listen for changes to each filter
//function filterClick(){
d3.selectAll("#datetime").on("change", function(){
  let date = d3.select("#datetime").property("value");
  console.log(date);
  updateFilters(date,"datetime");
});
d3.selectAll("#city").on("change", function(){
  let city = d3.select("#city").property("value");
  updateFilters(city,"city");
  console.log(city);
});
d3.selectAll("#state").on("change", function(){
  let state = d3.select("#state").property("value");
  updateFilters(state,"state");
});
d3.selectAll("#country").on("change", function(){
  let country = d3.select("#country").property("value");
  updateFilters(country,"country");
});
d3.selectAll("#shape").on("change", function(){ 
  let shape = d3.select("#shape").property("value");
  updateFilters(shape,"shape");
});
  
//};


// Build the table when the page loads
buildTable(tableData);
