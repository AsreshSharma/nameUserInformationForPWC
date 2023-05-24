import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nameUserInformationForPWC';
  getDate:any='';
  ngOnInit(): void {
    this.getDate =new Date();
  }
}
