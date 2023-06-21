import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListSerService {

  public id:any;
  public ttl:any;
  public comp:any;
  constructor(private htp: HttpClient) { }

 
  getData()
  {
   return this.htp.get('http://localhost:3000/list');
  }

  postData(dt:any)
  {
    return this.htp.post('http://localhost:3000/list',dt);
  }

  deleteData(dt:any)
  {
    return this.htp.delete('http://localhost:3000/list/'+dt);
  }

  putData(dt:any)
  {
    return this.htp.put('http://localhost:3000/list/'+dt.id,dt)
  }

  patchFun(data: any)
  {
    this.id= data.id;
    this.comp = data.comp;
    this.ttl = data.ttl;
  }
}
