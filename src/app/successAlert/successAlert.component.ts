import {Component} from '@angular/core' ;

@Component({
selector: 'app-success',
templateUrl: './successAlert.component.html',
styleUrls: ['./successAlert.component.css']

})

export class SuccessAlertComponent{

  successCode: Number = 200;
  successMessage: String = 'OK';


}
