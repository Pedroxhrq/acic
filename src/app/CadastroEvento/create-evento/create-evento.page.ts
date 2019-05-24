import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-create-evento',
  templateUrl: './create-evento.page.html',
  styleUrls: ['./create-evento.page.scss'],
})
export class CreateEventoPage  {

  ref = firebase.database().ref('eventos/');
  eventoForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { 

      this.eventoForm = this.formBuilder.group({
        'evento_titulo' : [null, Validators.required],
        'evento_data' : [null, Validators.required],
        'evento_hora' : [null, Validators.required],
        'evento_local' : [null, Validators.required],
        'evento_telefone' : [null, Validators.required],
        'evento_precoAssociado' : [null, Validators.required],
        'evento_descricao' : [null, Validators.required],
        'evento_preco' : [null, Validators.required],
      });



    }

    gOnInit() {
  }


  saveEvento() {
    
    let newEvento = firebase.database().ref('eventos/').push();
    newEvento.set(this.eventoForm.value);
    this.router.navigate(['/detailEvento/'+newEvento.key]);
  }



}
