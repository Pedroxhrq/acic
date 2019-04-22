import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-associado',
  templateUrl: './edit-associado.page.html',
  styleUrls: ['./edit-associado.page.scss'],
})
export class EditAssociadoPage implements OnInit {
  ref = firebase.database().ref('associados/');
  associadoForm: FormGroup;


  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder){

 this.associadoForm = this.formBuilder.group({
      

        'associado_nome' : [null, Validators.required],
        'associado_razao' : [null, Validators.required],
        'associado_email' : [null, Validators.required],
        'associado_telefone' : [null, Validators.required],
        'associado_cidade' : [null, Validators.required],
        'associado_site' : [null, Validators.required],
     



      });
      this.getAssociado(this.route.snapshot.paramMap.get('key'));
  }


  ngOnInit() {
  }

  getAssociado(key) {
    firebase.database().ref('associados/'+key).on('value', resp => {
      let associado = snapshotToObject(resp);
      this.associadoForm.controls['associado_nome'].setValue(associado.associado_nome);
      this.associadoForm.controls['associado_razao'].setValue(associado.associado_razao);
      this.associadoForm.controls['associado_email'].setValue(associado.associado_email);
      this.associadoForm.controls['associado_telefone'].setValue(associado.associado_telefone);
      this.associadoForm.controls['associado_cidade'].setValue(associado.associado_cidade);
      this.associadoForm.controls['associado_site'].setValue(associado.associado_site);
    });
  }



  updateAssociado() {
    let newAssociado = firebase.database().ref('associados/'+this.route.snapshot.paramMap.get('key')).update(this.associadoForm.value);
    this.router.navigate(['/detail-associado/'+this.route.snapshot.paramMap.get('key')]);
  }



}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}