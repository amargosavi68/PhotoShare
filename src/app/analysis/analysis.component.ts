import { Component, OnInit } from '@angular/core';
import { Label } from "ng2-charts";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Category, Photo } from "../shared/photo";
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  count: number[] = [];
  //['Wildlife Photography', 'Nature Photography', 'Weather Photography', 'Food Photography', 'Macro Photography', 'Sport Photography', 'Fashion Photography', 'Still Life Photography']

  constructor(private photoService: PhotosService) { }
  'photo': Photo[];
  'wildlife': number = 0;
  'nature': number = 0;
  'weather': number = 0;
  'food': number = 0;
  'macro': number = 0;
  'sport': number = 0;
  'fashion': number = 0;
  'still_life': number = 0;

  ngOnInit(): void {
    this.count = [];
    this.photoService.getPhotos()
    .subscribe(photos => this.photo = photos);
    console.log(this.photo);

    for (let index = 0; index < this.photo.length; index++) {
      if (this.photo[index].category == "Wildlife Photography")
        this.wildlife++;
      else if (this.photo[index].category == "Nature Photography")
        this.nature++;
      else if (this.photo[index].category == "Weather Photography")
        this.weather++;
      else if (this.photo[index].category == "Food Photography")
        this.food++;
      else if (this.photo[index].category == "Macro Photography")
        this.macro++;
      else if (this.photo[index].category == "Sport Photography")
        this.sport++;
      else if (this.photo[index].category == "Fashion Photography")
        this.fashion++;
      else if (this.photo[index].category == "Still Life Photography")
        this.still_life++;
    }
    this.count.push(this.wildlife);
    this.count.push(this.nature);
    this.count.push(this.weather);
    this.count.push(this.food);
    this.count.push(this.macro);
    this.count.push(this.sport);
    this.count.push(this.fashion);
    this.count.push(this.still_life);
    console.log("The data: ", this.count);
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = Category;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {data: this.count, label: 'Categorywise Analysis' }
  ];

}
