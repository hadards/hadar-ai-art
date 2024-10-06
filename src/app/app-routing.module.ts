import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { StartPageMobileComponent } from './start-page-mobile/start-page-mobile.component';

const routes: Routes = [
  {path: 'hadar-ai-art',  component:  window.screen.width > 767 ? StartPageComponent : StartPageMobileComponent},
  {path: '',  component:  window.screen.width > 767 ? StartPageComponent : StartPageMobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
