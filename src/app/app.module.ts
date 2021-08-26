
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module'

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
