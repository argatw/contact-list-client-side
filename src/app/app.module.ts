import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormComponent } from './components/form.component';
import { ContactListComponent } from './components/contact-list.component';
import { RouterModule, Routes } from '@angular/router'
import { ContactService } from './contact.service';

const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'contactlist', component: ContactListComponent},
  // { path: '**', redirectTo: '/', pathMatch: 'full'},
  
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
