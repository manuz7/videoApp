import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'homem-aranha',
    loadChildren: () => import('./homem-aranha/homem-aranha.module').then( m => m.HomemAranhaPageModule)
  },  {
    path: 'jogos-vorazes',
    loadChildren: () => import('./jogos-vorazes/jogos-vorazes.module').then( m => m.JogosVorazesPageModule)
  },
  {
    path: 'violet-evergarden',
    loadChildren: () => import('./violet-evergarden/violet-evergarden.module').then( m => m.VioletEvergardenPageModule)
  },
  {
    path: 'your-name',
    loadChildren: () => import('./your-name/your-name.module').then( m => m.YourNamePageModule)
  },
  {
    path: 'thor-amor-e-trovao',
    loadChildren: () => import('./thor-amor-e-trovao/thor-amor-e-trovao.module').then( m => m.ThorAmorETrovaoPageModule)
  },
  {
    path: 'como-eu-era-antes-de-voce',
    loadChildren: () => import('./como-eu-era-antes-de-voce/como-eu-era-antes-de-voce.module').then( m => m.ComoEuEraAntesDeVocePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
