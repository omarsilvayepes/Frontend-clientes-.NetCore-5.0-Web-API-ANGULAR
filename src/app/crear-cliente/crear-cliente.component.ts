import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent  {

  constructor(private service:ClienteService,private router:Router) { }

  ClienteForm=new FormGroup({
    cc:new FormControl('',Validators.required),
    nombres:new FormControl('',Validators.compose([
     Validators.required,
     Validators.minLength(3),
     Validators.maxLength(30)
   ])),
    apellidos:new FormControl('',Validators.compose([Validators.required,
     Validators.minLength(3),
     Validators.maxLength(30)])),
    direccion:new FormControl('',Validators.compose([Validators.required,
     Validators.minLength(3),
     Validators.maxLength(30)]))
  })

 onSubmit(){
   console.log(this.ClienteForm.value);
   this.service.creaCliente(this.ClienteForm.value).subscribe((data:any)=>{
     alert("Cliente Creado Con exito");
     this.router.navigate(['/clientes']);//redirigir a clientes
   },
   (errorData)=>alert(errorData.error.displayMessage));
 }
}
