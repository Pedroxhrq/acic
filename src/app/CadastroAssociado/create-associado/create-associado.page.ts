import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-create-associado',
  templateUrl: './create-associado.page.html',
  styleUrls: ['./create-associado.page.scss'],
})
export class CreateAssociadoPage  {
 
  ref = firebase.database().ref('associados/');
  associadoForm: FormGroup;



  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) 

    {
      this.associadoForm = this.formBuilder.group({
        'associado_nome' : [null, Validators.required],
        'associado_razao' : [null, Validators.required],
        'associado_email' : [null, Validators.required],
        'associado_telefone' : [null, Validators.required],
        'associado_cidade' : [null, Validators.required],
        'associado_site' : [null, Validators.required],
      });
    }

  
  gOnInit() {
  }

  saveAssociado() {
    
    let newAssociado = firebase.database().ref('associados/').push();
    newAssociado.set(this.associadoForm.value);
    this.router.navigate(['/detailAssociado/'+newAssociado.key]);
  }


}
