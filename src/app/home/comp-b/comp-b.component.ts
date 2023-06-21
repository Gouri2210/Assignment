import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrdGuard } from 'src/app/myGuard/grd.guard';
import { CompAComponent } from '../comp-a/comp-a.component';
import { ListSerService } from 'src/app/myservice/list-ser.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {
public data:any;

public title:any;
public cmp:any;
public idd:any;
  public allData:any
  
  constructor(private ser: ListSerService)
  {
    this.getFun();
  }

  // getFun()
  // {
  //   this.ser.getData().subscribe((res:any)=>{console.log(res); this.allData = res});
  // }

  public products: any=[];

  
    getFun() {
        this.ser.getData().subscribe((data : any) => {
            this.products = data;
        });
    }

  
    del(dt:any)
    {
        this.ser.deleteData(dt).subscribe((res:any)=>{console.log(res)});
        alert("You want to delete Data?");
        this.getFun();
    }
   
   edit(dt:any)
   {
    this.ser.patchFun(dt) ;
   }
   
   
}
