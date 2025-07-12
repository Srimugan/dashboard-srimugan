import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: 'full'
  },
  {
    path: "dashboard",
    loadChildren:() => import("../app/feature/dashboard/dashboard.module").then((m) => m.DashboardModule)
  },
   {
    path: "investment-details",
    loadChildren:() => import("../app/core/core.module").then((m) => m.CoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
