import { Component, ViewChild } from '@angular/core';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { FirstSaerService } from '../myservice/first-saer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
