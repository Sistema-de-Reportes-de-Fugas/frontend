import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { GraficaService } from './services/grafica.service';
import { Reporte } from './models/reporte';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {
  title = 'dashboard';
  chart;
  chart2 = [];
  pie: any;
  doughnut: any;
  allReports: Reporte[];
  data1 = [];
  len: number;
  len2: number;
  len3: number;
  len4: number;
  len5: number;
  lentotal: number;
  counter = 0;
  ngOnInit() {

    this.getReports();

    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Tipos de Personas'
        },
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              // minimum will be 0, unless there is a lower value.
              // OR //
              beginAtZero: true   // minimum value will be 0.
            }
          }]
        }
      },
      data: {
        labels: ['Reportero', 'Agente de la SSP', 'Transeunte', 'Comerciante', 'Otro'],
        datasets: [
          {
            type: 'bar',
            label: 'Reportero, Agente, Transeunte, Comerciante, Otro',
            data: [this.len, this.len5],
            backgroundColor: ['rgba(46,89,33,0.8)', 'rgba(145,145,145,0.8)', 'rgba(46,89,33,0.8)', 'rgba(145,145,145,0.8)', 'rgba(46,89,33,0.8)'],
            borderColor: 'rgba(46,89,33,0.8)',
            fill: false,
          },
        ]
      }
    });
    const options = {
      // aspectRatio: 1,
      // legend: false,
      tooltips: false,

      elements: {
        point: {
          borderWidth(context) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor(context) {
            return 'red';
          },
          hoverBorderWidth(context) {
            const value = context.dataset.data[context.dataIndex];
            return Math.round(8 * value.v / 1000);
          },
          radius(context) {
            const value = context.dataset.data[context.dataIndex];
            const size = context.chart.width;
            const base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }
        }
      }
    };
    this.doughnut = new Chart('doughnut', {
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Reportes Resueltos'
        }, legend: {
          position: 'top',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [{

          data: [this.lentotal, 10],
          backgroundColor: ['rgba(46,89,33,0.8)', 'rgba(145,145,145,0.8)'],
          label: 'reportesResueltos'
        }],
        labels: ['Reportes Realizados']
      }
    });
  }
  getReports() {
    this.Service.getReportes().subscribe((data) => {
      this.allReports = data;
      console.log('respuesta de alumno->' + this.allReports);

      this.len = this.allReports.filter((item) => {
        return item.tipoPersona === 'Reportero';
      }).length;
      console.log(this.len);

      this.len2 = this.allReports.filter((item) => {
        return item.tipoPersona === 'Agente de la SSP';
      }).length;
      console.log(this.len2);

      this.len3 = this.allReports.filter((item) => {
        return item.tipoPersona === 'Transeunte';
      }).length;
      console.log(this.len3);

      this.len4 = this.allReports.filter((item) => {
        return item.tipoPersona === 'Comerciante';
      }).length;
      console.log(this.len4);

      this.len5 = this.allReports.filter((item) => {
        return item.tipoPersona === 'Otro';
      }).length;
      console.log(this.len5);

      this.lentotal = this.len + this.len2 + this.len3 + this.len4 + this.len5;
      console.log(this.lentotal);

      this.chart.chart.data.datasets[0].data = [this.len, this.len2, this.len3, this.len4, this.len5];
      this.doughnut.chart.data.datasets[0].data = [this.lentotal];

      this.chart.chart.update();
      this.doughnut.chart.update();

    });

    setTimeout(() => {
      this.chart.chart.update();
    }, 2600);

  }

  updateChart() {
    this.chart.update(); // This re-renders the canvas element.
  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }


  updateChartData(chart, data, dataSetIndex) {
    chart.data.datasets[dataSetIndex].data = data;
    chart.update();
  }

  constructor(public Service: GraficaService) { }
}
