import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';
import { ClienteService } from '../cliente.service';
import { ClienteInterface } from '../interfaces/ClienteInterface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  dataSource:any=[];
  displayedColumns:string[]=['cc','nombres','apellidos','direccion','acciones'];

  @ViewChild(MatPaginator) paginator:MatPaginator | any;
  constructor(private service:ClienteService,
    private dialog:MatDialog,
    private router:Router) { }

  ngOnInit(): void {
    this.service.getClientes().subscribe((data:any)=>{
      this.dataSource=new MatTableDataSource<ClienteInterface>(data.result as ClienteInterface[]);
      this.dataSource.paginator=this.paginator;
    console.log(data);
    },
    (errorData)=>this.router.navigate(['/login']));

  }
  actualizarCliente(cliente:ClienteInterface){
    console.log(cliente);

    this.dialog.open(ActualizarClienteComponent,{
      data:{
        cc:cliente.cc,
        nombres:cliente.nombres,
        apellidos:cliente.apellidos,
        direccion:cliente.direccion,
        id:cliente.id
      }
    })

  }

  aplicarFiltro(filtro:any){
    this.dataSource.filter=filtro.target.value.trim().toLowerCase();

  }
    
}
