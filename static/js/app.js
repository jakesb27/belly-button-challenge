const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

var dropdownMenu = d3.select("#selDataset");
var selSubject = ""


d3.json(url).then(function(data) {
  updateDropdown(data.names);
  selSubject = data.names[0];
  console.log(selSubject);
  updateBarChart(data.samples);
  updateBubbleChart(data.samples);
  updateDemographics(data.metadata);
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

function updateBubbleChart(values) {
  console.log(values);
};


function updateDemographics(values) {
  console.log(values);
};