import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: 'post',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)},
    { path: 'post2', loadChildren: () => import('./post2/post2.module').then(m => m.Post2Module) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
