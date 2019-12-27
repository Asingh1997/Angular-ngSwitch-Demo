import { Component } from '@angular/core';


 @Component({
  selector: 'app-root',
  template: ` 
    <ul [ngSwitch]="person">
  <li *ngSwitchCase="'Mohan'">Hello Mohan</li>
  <li *ngSwitchCase="'Sohan'">Hello Sohan</li>
  <li *ngSwitchCase="'Vijay'">Hello Vijay</li>
  <li *ngSwitchDefault>Bye Bye</li>
</ul> 
 	

  `,
  
})
export class AppComponent  {
person = 'Sohan';
  

}
