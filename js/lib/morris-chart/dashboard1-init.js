// Dashboard 1 Morris-chart
$( function () {
	"use strict";

	// Extra chart
	var lineChartData = {
		element: 'extra-area-chart',
		data: [ {
				period: '2018-05-01',
				Television: 35,
				Lights: 20,
				AC: 8,
				Fridge: 28,
				XBox: 5,
				// Total: 96
        }, {
				period: '2018-05-02',
				Television: 32,
				Lights: 21,
				AC: 9,
				Fridge: 27,
				XBox: 5,
				// Total: 94
        }, {
				period: '2018-05-03',
				Television: 25,
				Lights: 20,
				AC: 12,
				Fridge: 30,
				XBox: 5,
				// Total: 94
        }, {
				period: '2018-05-04',
				Television: 20,
				Lights: 23,
				AC: 5,
				Fridge: 30,
				XBox: 5,
				// Total: 94
        }, {
				period: '2018-05-05',
				Television: 23,
				Lights: 20,
				AC: 7,
				Fridge: 35,
				XBox: 5,
				// Total: 94
        }, {
				period: '2018-05-06',
				Television: 17,
				Lights: 17,
				AC: 7,
				Fridge: 43,
				XBox: 5,
				// Total: 94
        }, {
				period: '2018-05-07',
				Television: 15,
				Lights: 25,
				AC: 10,
				Fridge: 45,
				XBox: 5,
				// Total: 94
				}
      ],
		lineColors: [ '#26DAD2', '#fc6180', '#62d1f3', '#ffb64d', '#4680ff', '#ABC123' ],
		xkey: 'period',
		ykeys: [ 'Television', 'Lights', 'Fridge', 'AC', 'XBox' ],
		// goals: [75],
		labels: [ 'Television', 'Lights', 'Fridge', 'AC', 'XBox'  ],
		pointSize: 6,
		lineWidth: 3,
		resize: true,
		fillOpacity: 0,
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		// hideHover: 'auto'

	};
Morris.Line( lineChartData );

var TVreducer = (accumulator, currentValue) => accumulator + currentValue.Television
var Lightsreducer = (accumulator, currentValue) => accumulator + currentValue.Lights
var ACreducer = (accumulator, currentValue) => accumulator + currentValue.AC
var Fridgereducer = (accumulator, currentValue) => accumulator + currentValue.Fridge
var XBoxreducer = (accumulator, currentValue) => accumulator + currentValue.XBox

var sumData = lineChartData.data.reduce(Fridgereducer, 0) + lineChartData.data.reduce(TVreducer, 0) + lineChartData.data.reduce(Lightsreducer, 0) + lineChartData.data.reduce(ACreducer, 0) + lineChartData.data.reduce(XBoxreducer, 0)
var piChartData = {
	element: 'donut-example',
	data: [
		{label: "Fridge", value: lineChartData.data.reduce(Fridgereducer, 0)},
		{label: "Television", value: lineChartData.data.reduce(TVreducer, 0)},
		{label: "Lights", value: lineChartData.data.reduce(Lightsreducer, 0)},
		{label: "AC", value: lineChartData.data.reduce(ACreducer, 0)},
		{label: "XBox", value: lineChartData.data.reduce(XBoxreducer, 0)},
	],
	colors: lineChartData.lineColors,
	formatter: function (y, data) { return (y/sumData*100.0).toFixed(0) +'%' }
}
Morris.Donut( piChartData );


} );
