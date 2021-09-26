import { Component, OnInit } from '@angular/core';
import { PersonalService } from './services/personal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private personalService:PersonalService){}
  
  ngOnInit(){

    this.personalService.getPersonal().subscribe(resp =>{

    console.log('resp :>> ', resp);

    },err => console.error(err))

  }
  //title = 'frontPersonal';
}
