import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThmHeaderComponent } from './theme/thm-header/thm-header.component';
import { ThmMenubarComponent } from './theme/thm-menubar/thm-menubar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ThmHeaderComponent,
    ThmMenubarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  
  exports:[
    FormsModule,
    ReactiveFormsModule,
    ThmHeaderComponent,
    ThmMenubarComponent
  ]
})
export class SharedModule { }
