import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UploadphotoComponent } from "./uploadphoto/uploadphoto.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'uploadphoto', component: UploadphotoComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
