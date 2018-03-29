import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';

import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {WarningAlertComponent} from './warningAlert/warningAlert.component';
import {SuccessAlertComponent } from './successAlert/successAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent ,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
