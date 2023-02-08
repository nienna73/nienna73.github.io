"use strict";

var data = {}
fetch('https://nienna73.github.io/other_content/countdown/files/all.json')
  .then(response => response.json())
  .then(d => {
    data = d; 
    
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 100, bottom: 30, left: 30},
        width = 800 - margin.left - margin.right,
        height = 550 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


    // List of groups (here I have one group per column)
    var allGroup = ["driving","saving","tidying","coding","games","planning","dresses","gratitude","writing","creative projects","workouts","recipes","reading"]

    // Reformat the data: we need an array of arrays of {x, y} tuples
    var dataReady = []
    for (var n of allGroup) {
        var index = 1;
        var values = []
        for (var month in data) {
            var entry = {
                time: index,
                value: data[month][n]
            }
            values.push(entry)
            index++;
        }
        var x = {
            name: n,
            values: values
        }
        dataReady.push(x);
    }
    // I strongly advise to have a look to dataReady with
    // console.log(dataReady)

    // A color scale: one color for each group
    var myColor = d3.scaleOrdinal()
        .domain(allGroup)
        .range(d3.schemeSet2);

    // Add X axis --> it is a date format
    var x = d3.scaleLinear()
        .domain([1, 12])
        .range([ 0, width ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))

    // Add Y axis
    var y = d3.scaleLinear()
        .domain( [0,31])
        .range([ height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add the lines
    var line = d3.line()
        .x(function(d) { return x(+d.time) })
        .y(function(d) { return y(+d.value) })
    svg.selectAll("myLines")
        .data(dataReady)
        .enter()
        .append("path")
        .attr("d", function(d){ return line(d.values) } )
        .attr("stroke", function(d){ return myColor(d.name) })
        .style("stroke-width", 4)
        .style("fill", "none")

    // Add the points
    svg
        // First we need to enter in a group
        .selectAll("myDots")
        .data(dataReady)
        .enter()
        .append('g')
        .style("fill", function(d){ return myColor(d.name) })
        // Second we need to enter in the 'values' part of this group
        .selectAll("myPoints")
        .data(function(d){ return d.values })
        .enter()
        .append("circle")
        .attr("cx", function(d) { return x(d.time) } )
        .attr("cy", function(d) { return y(d.value) } )
        .attr("r", 5)
        .attr("stroke", "white")

    // Add a legend at the end of each line
    svg
        .selectAll("myLabels")
        .data(dataReady)
        .enter()
        .append('g')
        .append("text")
            .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; }) // keep only the last value of each time series
            .attr("transform", function(d, i) { return "translate(" + x(d.value.time) + "," + y(i) + ")"; }) // Put the text at the position of the last point
            .attr("x", 12) // shift the text a bit more right
            .text(function(d) { return d.name; })
            .style("fill", function(d){ return myColor(d.name) })
            .style("font-size", 15)





})
  .catch(error => console.log(error));

