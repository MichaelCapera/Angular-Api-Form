import { Component, OnInit } from '@angular/core';
import { PersonalService } from './services/personal.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  data: any;
  bosses: any[] = [];

  public f = this.form.group({
    id: [''],
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    boss: ['', [Validators.required]]

  });

  public fU = this.form.group({
    id: [''],
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    boss: ['', [Validators.required]]

  });

  formSubmitted = false;

  constructor(private personalService: PersonalService,
    private form: FormBuilder) { }

  ngOnInit() {

    this.personalService.getPersonal().subscribe(resp => {

      let data = [];
      for (const i in resp) {
        data.push(resp[i]);
      }
      this.data = data;

      for (const i in this.data) {

        if (this.data[i].type == "boss") {
          this.bosses.push(this.data[i].name);
        }
      }
    }, err => console.error(err));
  }

  savePerson() {

    this.formSubmitted = true;
    if (this.f.invalid) {
      return;
    }

    let person = {
      name: this.f.controls.name.value,
      type: this.f.controls.type.value,
      boss: this.f.controls.boss.value
    }

    this.personalService.savePerson(person).subscribe(resp => {

      Swal.fire({
        title: 'Success',
        text: "User saved",
        icon: 'success',
        confirmButtonColor: '#075de8',
        confirmButtonText: 'Ok'
      }).then((result) => {
        window.location.reload();
      })

    }, err => { console.error(err) }
    );

  }

  invalidField(field: string) {

    if (this.formSubmitted && this.f.controls[field].invalid) {

      return true;

    } else {

      return false;

    }
  }

  deletePerson(id: any) {

    this.personalService.deletePerson(id).subscribe(resp => {

      Swal.fire({
        title: 'Success',
        text: "User deleted",
        icon: 'success',
        confirmButtonColor: '#075de8',
        confirmButtonText: 'Ok',
        timer: 10000
      }).then((result) => {
        window.location.reload();
      })


    }, err => { console.error(err) }
    );
  }

  updatePerson(person: any) {

    let updateForm = this.fU.value;

    for (const i in updateForm) {

      if (updateForm[i] == '') {

        updateForm[i] = person[i]

      }
    }

    this.personalService.savePerson(updateForm).subscribe(resp => {

      Swal.fire({
        title: 'Success',
        text: "User updated",
        icon: 'success',
        confirmButtonColor: '#075de8',
        confirmButtonText: 'Ok'
      }).then((result) => {
        window.location.reload();
      })

    }, err => { console.error(err) }
    );
  }
}
