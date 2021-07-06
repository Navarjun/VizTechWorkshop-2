// select SVG and set it's size
// think: deciding the size of the canvas
let width = 700;
let height = 400;
let margin = 50;

// d3.select selects the SVG element on the page
let svg = d3.select('svg')
    .attr('width', width + 2*margin) // set width for the SVG
    .attr('height', height + 2*margin); // set the height for the SVG

// Add an empty group which will contain all the points for the scatter-plot
let containerG = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

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

    // Check the extent of values in our data
    let xExtent = d3.extent(data, function(row) { return row.x });
    let yExtent = d3.extent(data, function(row) { return row.y });
    console.log(xExtent, yExtent);

    // Create a scale function
    // to change data values to canvas values
    let xScale = d3.scaleLinear()
        .domain(xExtent)
        .range([0, width]);

    let yScale = d3.scaleLinear()
        .domain(yExtent)
        .range([height, 0]);

    // Create points for scatter plot
    containerG
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', function(row) { return xScale(row.x); })
        .attr('cy', function(row) { return yScale(row.y); })
        .attr('data-y', function(row) { return row.y; })
        .attr('r', 5);

    // Create an axis function
    let xAxis = d3.axisBottom().scale(xScale);
    // draw using the axis function
    d3.select('.x-axis')
        .attr('transform', `translate(${margin}, ${height+margin})`)
        .call(xAxis);

    // Create an axis function
    let yAxis = d3.axisLeft().scale(yScale);
    // draw using the axis function
    d3.select('.y-axis')
        .attr('transform', `translate(${margin}, ${margin})`)
        .call(yAxis);
}