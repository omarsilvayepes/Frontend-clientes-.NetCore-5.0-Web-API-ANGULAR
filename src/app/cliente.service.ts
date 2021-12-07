import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ClienteInterface } from './interfaces/ClienteInterface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //baseUrl:string='https://localhost:44335/api/Clientes/';
  baseUrl:string='https://apimisclientes.herokuapp.com/api/Clientes/';

  constructor(private http:HttpClient) { }

  getClientes(){

    let auth_token=localStorage.getItem('token_value');
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${auth_token}`
    })
    return this.http.get(this.baseUrl,{headers:headers});

  }
  getClienteById(id:string){

    let auth_token=localStorage.getItem('token_value');
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${auth_token}`
    })
    return this.http.get(this.baseUrl+id,{headers:headers});

  }
  creaCliente(cliente:ClienteInterface){
    let auth_token=localStorage.getItem('token_value');
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${auth_token}`
    })
    
    return this.http.post(this.baseUrl,cliente,{headers:headers});

  }

  actualizarCliente(id:string,cliente:ClienteInterface){
    let auth_token=localStorage.getItem('token_value');
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${auth_token}`
    })
    return this.http.put(this.baseUrl+id,cliente,{headers:headers});

  }

  deleteCliente(id:string){
    let auth_token=localStorage.getItem('token_value');
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${auth_token}`
    })
    return this.http.delete(this.baseUrl+id,{headers:headers});

  }


}
