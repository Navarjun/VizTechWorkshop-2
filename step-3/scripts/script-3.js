// select SVG and set it's size
// think: deciding the size of the canvas
let width = 800;
let height = 500;

// d3.select selects the SVG element on the page
let svg = d3.select('svg')
    .attr('width', width) // set width for the SVG
    .attr('height', height); // set the height for the SVG

// Adding a circle in the SVG
// svg.append('circle')
//     .attr('cx', 100) // set the x-coordinate for the center
//     .attr('cy', 100) // set the y-coordinate for the center
//     .attr('r', 70);  // set the radius for the circle

// load csv
d3.csv('./data/sample.csv', processData)
    .then(dataLoaded);

function processData(row) {
    row.x = Number(row.x);
    row.y = Number(row.y);
    return row;
}

function dataLoaded(data) {
    console.log(data);
}