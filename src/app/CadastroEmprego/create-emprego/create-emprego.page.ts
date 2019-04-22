import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-create-emprego',
  templateUrl: './create-emprego.page.html',
  styleUrls: ['./create-emprego.page.scss'],
})


export class CreateEmpregoPage  {
  ref = firebase.database().ref('empregos/');
  empregoForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { 

      this.empregoForm = this.formBuilder.group({
        'emprego_cargo' : [null, Validators.required],
        'emprego_empresa' : [null, Validators.required],
        'emprego_remuneracao' : [null, Validators.required],
        'emprego_descricao' : [null, Validators.required],
        'emprego_telefone' : [null, Validators.required],
        'emprego_email' : [null, Validators.required],
      });
    }

  ngOnInit() {
  }

  saveEmprego() {
    
    let newEmprego = firebase.database().ref('empregos/').push();
    newEmprego.set(this.empregoForm.value);
    this.router.navigate(['/detailEmprego/'+newEmprego.key]);
  }




}
