"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];
const regions = [region1, region2, region3, region4, region5];

//Sales by quarter
let Q1 = 0;
for(let number of regions){
    Q1 += number[0];
}
let Q2 = 0;
for(let number of regions){
    Q2 += number[1];
}
let Q3 = 0; 
for(let number of regions){
    Q3 += number[2];
}

let Q4 = 0;
for(let number of regions){
    Q4 += number[3]
}

//Sales by region
let r1 = 0;
for (let number of region1) {
    r1 += number;
}

let r2 = 0;
for (let number of region2) {
    r2 += number;
}

let r3 = 0;
for (let number of region3) {
    r3 += number;
}

let r4 = 0;
for (let number of region4) {
    r4 += number;
}

let r5 = 0;
for (let number of region5) {
    r5 += number;
}

//Total Sales
let totalSales = r1 + r2 + r3 + r4 + r5;

document.write(`
    <h2> Sales By Quarter</h2><br>
    Q1: ${Q1}<br>
    Q2: ${Q2}<br>
    Q3: ${Q3}<br>
    Q4: ${Q4}<br><br>
    <h2> Sales By Region</h2><br>
    Region 1: ${r1}<br>
    Region 2: ${r2}<br>
    Region 3: ${r3}<br>
    Region 4: ${r4}<br>
    Region 5: ${r5}<br>
    <h2> Total Sales</h2><br>
    Total Sales: ${totalSales}
`);