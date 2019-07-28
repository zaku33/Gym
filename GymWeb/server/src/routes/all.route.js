const express = require('express');
const router = express();
const generalCRUD = require('../controller/generalCRUD.controller');

router.use('/', [
    require('./route/user.route'),
    require('./route/login.route'),
    require('./route/createFile.route')
])
module.exports = router

// async function DistanceCompare(destination, ...start) {
//     let result = [];
//     let first_calculator = Math.abs(destination - start[0]);
//     for (let i = 1; i < start.length; i++) {
//         let calculator = Math.abs(destination - start[i]);
//         let min_distance = (first_calculator < calculator) ? first_calculator : calculator;
//         let min_at = (first_calculator < calculator) ? start[0] : start[i];
//         result.push({
//             min_distance: min_distance,
//             min_at: min_at
//         })
//     }
//     let min_distance = result[0].min_distance;
//     let min_at = result[0].min_at;
//     for (let j = 0; j < result.length; j++) {
//         if (min_distance > result[j].min_distance) {
//             min_distance = result[j].min_distance;
//             min_at = result[j].min_at;
//         }
//     }
//     return console.log({
//         quang_duong: `${min_distance} km`,
//         vi_tri: `${min_at}`
//     })
// }