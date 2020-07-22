import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post2RoutingModule } from './post2-routing.module';
import { Post2Component } from './post2.component';


@NgModule({
  declarations: [Post2Component],
  imports: [
    CommonModule,
    Post2RoutingModule
  ]
})
export class Post2Module { }
