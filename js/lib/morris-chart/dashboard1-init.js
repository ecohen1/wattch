// Dashboard 1 Morris-chart
$( function () {
	"use strict";


	// Extra chart
	Morris.Area( {
		element: 'extra-area-chart',
		data: [ {
				period: '1',
				Television: 35,
				Lights: 20,
				AC: 8,
				Fridge: 28,
				XBox: 5
        }, {
				period: '2',
				Television: 32,
				Lights: 21,
				AC: 9,
				Fridge: 27,
				XBox: 5
        }, {
				period: '3',
				Television: 25,
				Lights: 20,
				AC: 12,
				Fridge: 30,
				XBox: 5
        }, {
				period: '4',
				Television: 20,
				Lights: 23,
				AC: 5,
				Fridge: 30,
				XBox: 5
        }, {
				period: '5',
				Television: 23,
				Lights: 20,
				AC: 7,
				Fridge: 35,
				XBox: 5
        }, {
				period: '6',
				Television: 17,
				Lights: 17,
				AC: 7,
				Fridge: 43,
				XBox: 5
        }, {
				period: '7',
				Television: 15,
				Lights: 25,
				AC: 10,
				Fridge: 45,
				XBox: 5
        }


        ],
		lineColors: [ '#26DAD2', '#fc6180', '#62d1f3', '#ffb64d', '#4680ff' ],
		xkey: 'period',
		ykeys: [ 'Television', 'Lights', 'Fridge', 'AC', 'XBox' ],
		labels: [ 'Television', 'Lights', 'Fridge', 'AC', 'XBox'  ],
		pointSize: 0,
		lineWidth: 0,
		resize: true,
		fillOpacity: 0.8,
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		hideHover: 'auto'

	} );



} );
