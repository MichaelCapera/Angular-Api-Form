import { Component, OnInit } from '@angular/core';
import { PersonalService } from './services/personal.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  data:any;
  bosses:any;

  public f = this.form.group({
    name:['',[Validators.required]],
    type:['',[Validators.required]],
    boss:['',[Validators.required]]

  });

  formSubmitted = false;

  constructor(private personalService:PersonalService,
              private form:FormBuilder){}

  ngOnInit(){

    this.personalService.getPersonal().subscribe(resp =>{

    this.data = Object.values(resp);  

    },err => console.error(err));

    this.personalService.getBosses().subscribe(resp =>{

      this.bosses = Object.values(resp); 
    
    },err => {console.error(err)}
    );

    }
    
  //title = 'frontPersonal';

  savePerson(){

    this.formSubmitted = true;
    if(this.f.invalid){
      return;
    }
     
    let boss = this.f.controls.boss.value;
    let bossId = boss.split('+')[0];
    let bossName = boss.split('+')[1];
   

    let person = {
      name:this.f.controls.name.value,
      type:this.f.controls.type.value,
      id_boss:parseInt(bossId)
    }
    
     this.personalService.savePerson(person).subscribe(resp=>{

      

    },err =>{console.error(err)}
    );
 
    }

  invalidField(field:string){

    if(this.formSubmitted && this.f.controls[field].invalid){

      return true;

    }else{

      return false;

    }
  }
}
