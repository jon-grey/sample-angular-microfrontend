import { EmptyComponent } from './../../projects/client-b/src/app/empty/empty.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      EmptyComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot([
        { path: '', pathMatch: 'full', redirectTo: 'home'},
        { path: '**', component: EmptyComponent }
      ],
      { useHash: true }
      )
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   providers: [
    //  {provide: APP_BASE_HREF, useValue : '' }
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
