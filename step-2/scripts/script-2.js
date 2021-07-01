
// load csv
d3.csv('./data/sample.csv', processData)
    .then(dataLoaded);

// parse that data into correct data types
function processData(row) {
    row.x = Number(row.x);
    row.y = Number(row.y);
    return row;
}

// Once loading and parsing of data is done
// this function is called
function dataLoaded(data) {
    console.log(data);
}
