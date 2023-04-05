const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

var dropdownMenu = d3.select("#selDataset");


d3.json(url).then(function(data) {
  updateDropdown(data.names);
  updateBarChart(data.samples);
});

function optionChanged(value) {
  console.log(`Worked!: ${value}`);
};


function updateDropdown(values) {
  // ******** insert sort function *********
  for (let i = 0; i < values.length; i++) {
    dropdownMenu.append("option").text(values[i]).attr("option", values[i]);
  };
};

function updateBarChart(values) {
  console.log(values);
};