// select SVG and set it's size
// think: deciding the size of the canvas
let width = 800;
let height = 500;

// d3.select selects the SVG element on the page
let svg = d3.select('svg')
    .attr('width', width) // set width for the SVG
    .attr('height', height); // set the height for the SVG

// Add an empty group which will contain all the points for the scatter-plot
let containerG = svg.append('g');

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

    containerG.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', function(row) { return row.x; })
        .attr('cy', function(row) { return height-row.y; })
        .attr('data-y', function(row) { return row.y; })
        .attr('r', 5);
}