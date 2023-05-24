import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css']
})
export class UserinformationComponent implements OnInit,OnDestroy {

  lists:any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.GetRequest('users').pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      console.log(data);
      this.lists = data;
    })  
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
