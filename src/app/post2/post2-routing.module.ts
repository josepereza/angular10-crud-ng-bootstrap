import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post2Component } from './post2.component';

const routes: Routes = [{ path: '', component: Post2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post2RoutingModule { }
