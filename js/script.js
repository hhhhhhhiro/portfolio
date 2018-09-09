// JavaScript Document
$().ready(function(){
	"use strict";
/*			var popCanvas = $("#popChart");  */
/*			var popCanvas = document.getElementById("popChart");*/
			var popCanvas = document.getElementById("popChart-p").getContext("2d");
			var barChart = new Chart(popCanvas, {
			type: 'bar', //line, bar, radar, polarArea, pie, doughnut 以及bubble
			data: { 
			labels: ["C#","VBA","SQL", "HTML","CSS","JavaScript","jQuery","Java",""], // 图表横坐标
			datasets:[{
			label: 'programming',  // 图表标题
			data: [75,70,75,70,70,65,60,60,50],  //数据
			backgroundColor:[  // 颜色设置
			 'rgba(255, 99, 132, 0.6)',
			'rgba(54, 162, 235, 0.6)',
			'rgba(255, 206, 86, 0.6)',
			'rgba(75, 192, 192, 0.6)',
			'rgba(153, 102, 255, 0.6)',
			'rgba(255, 159, 64, 0.6)',
			'rgba(255, 99, 132, 0.6)',
			'rgba(54, 162, 235, 0.6)',
			'rgba(255, 206, 86, 0.6)',
			'rgba(75, 192, 192, 0.6)',
			'rgba(153, 102, 255, 0.6)'
		  ]
		}]
	  }
	});
	

		var popCanvas2 = document.getElementById("popChart-s").getContext("2d");
		var barChart = new Chart(popCanvas2, {
  		type: 'bar', //line, bar, radar, polarArea, pie, doughnut 以及bubble
  		data: { 
    	labels: ["Office", "Photoshop", "Illustrator", "Axure",""], // 图表横坐标
    	datasets: [{
      	label: 'Software',  // 图表标题
      	data: [80, 85, 85, 75,70],  //数据
      	backgroundColor: [  // 颜色设置
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)'
      ]
    }]
  }
});
	
});