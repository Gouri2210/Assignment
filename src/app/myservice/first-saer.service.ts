import { Injectable } from '@angular/core';
import {BehaviorSubject} from'rxjs'
@Injectable({
  providedIn: 'root'
})
export class FirstSaerService {

private message = new BehaviorSubject("Defauld data/ Gouri")
current = this.message.asObservable();

setSer(dt:any)
{
  this.message.next(dt);
}

getSer()
{
  return this.current;
}
}
