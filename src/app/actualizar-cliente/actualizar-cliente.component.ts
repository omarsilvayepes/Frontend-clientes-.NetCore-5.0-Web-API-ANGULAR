import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  form:FormGroup;
  id:string;

  constructor(private fb:FormBuilder,
    private dialogRef:MatDialogRef<ActualizarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) private data:{cc:string,nombres:string,apellidos:string,direccion:string,id:string}
    ,private router:Router,
    private service:ClienteService)
     {
       this.id=data.id;
       this.form=fb.group({
         cc:[data.cc,Validators.required],
         apellidos:[data.apellidos,Validators.required],
         nombres:[data.nombres,Validators.required],
         direccion:[data.direccion,Validators.required]
       })
      }

      cerrar(){
        this.dialogRef.close();

      }

      guardar(){
        this.form.value.id=this.id;
        this.service.actualizarCliente(this.id,this.form.value).subscribe((data)=>{
          this.router.navigate(['/clientes']);
          window.location.reload();
        })
        this.dialogRef.close();
      }

  ngOnInit(): void {
  }

}
