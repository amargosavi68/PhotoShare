import { Component, OnInit } from '@angular/core';
import { Photo } from '../shared/photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos: Photo[] = [
    {
      id: '1',
      profileImage: "amar.png",
      image: 'assest/Images/x.png',
      author: 'Amar Gosavi',
      description: 'Application is developed by Amar Gosavi',
      likes: '2'
    },
    {
      id: '2',
      profileImage: "amar.png",
      image: 'assest/Images/x.png',
      author: 'Omshree Dalvi',
      description: 'Application is developed by Amar Gosavi',
      likes: '2'
    },
    {
      id: '3',
      profileImage: "amar.png",
      image: 'assest/Images/x.png',
      author: 'Mayuri Bhuvad',
      description: 'Application is developed by Amar Gosavi',
      likes: '2'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
