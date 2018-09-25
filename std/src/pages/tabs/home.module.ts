import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home';
import { HomeManager } from "../../business/HomeManager";
import { WebSocketService } from "../../business/WebSocketService";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { 
        path: '',
        component: HomeComponent
      }
    ])
  ],
  declarations: [HomeComponent],
    providers : [
        WebSocketService,
        HomeManager
    ]
})

export class HomeModule {}
