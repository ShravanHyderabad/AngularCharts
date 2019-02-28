import {Component, NgIterable} from '@angular/core';
import {ChartService} from './chart.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charts';
  chart = [];
  // private data: IData[];
  private count = [];
  private house = [];

  constructor(private _weather: ChartService) {
  }
  ngOnInit() {
    this._weather.houseApproved().subscribe(res => {
     // this.data = res;
     // console.log(res.pop());
      for (let i = 0; i < res.length; i++) {
        this.house.push(res[i].houseName);
        this.count.push(res[i].count);
      }
      console.log(this.house);
      console.log(this.count);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.house,
          datasets: [
            {
              label: 'Count',
              data: this.count,
              borderColor: '#ffcc00',
              backgroundColor: '#3cba9f',
              fill: true,
              borderWidth: 5
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  }
}
