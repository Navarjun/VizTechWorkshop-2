
// load the csv in data
d3.csv('./data/sample.csv')
    .then(dataLoaded);

function dataLoaded(data) {
    console.log(data);
}