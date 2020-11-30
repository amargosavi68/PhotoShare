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

  count:number[] = [0,0,0,0,0,0,0,0];

  constructor(private photoService: PhotosService) { }


  ngOnInit(): void {

    this.photoService.getCategorialPhotos("Wildlife-Photography")
    .subscribe(photos => this.count[0] = photos.length);
    this.photoService.getCategorialPhotos("Nature-Photography")
    .subscribe(photos => this.count[1] = photos.length);
    this.photoService.getCategorialPhotos("Weather-Photography")
    .subscribe(photos => this.count[2] = photos.length);
    this.photoService.getCategorialPhotos("Food-Photography")
    .subscribe(photos => this.count[3] = photos.length);
    this.photoService.getCategorialPhotos("Macro-Photography")
    .subscribe(photos => this.count[4] = photos.length);
    this.photoService.getCategorialPhotos("Sport-Photography")
    .subscribe(photos => this.count[5] = photos.length);
    this.photoService.getCategorialPhotos("Fashion-Photography")
    .subscribe(photos => this.count[6] = photos.length);
    this.photoService.getCategorialPhotos("Still-Life-Photography")
    .subscribe(photos => this.count[7] = photos.length);
    console.log(this.count);
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
