import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListSerService } from 'src/app/myservice/list-ser.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {

 
  public title:any;
  public allData:any;
  public cmp:any;
  public idd :any;

 
  constructor(private ser: ListSerService, private act:ActivatedRoute )
  {
    this.getFun();
  }
  SubmitFun(dt:any)
  {
    this.ser.postData(dt).subscribe((res:any)=> {console.log(res),
    alert("Add the task in the list")});
  }

  getFun()
  {
    this.ser.getData().subscribe((res:any)=>{console.log(res); this.allData = res });
  }

  patchValue()
  {
    this.idd = this.ser.id;
    this.title = this.ser.ttl;
    this.cmp = this.ser.comp; 
  }

  ngDoCheck()
  {
    this.patchValue();
  }
  update(dt:any)
  {
    this.ser.putData(dt).subscribe((res:any)=> { console.log(res)});
    this.getFun();
  }
}
