import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'create', loadChildren: './CadastroBeneficio/create/create.module#CreatePageModule' },
  { path: 'detail/:key', loadChildren: './CadastroBeneficio/detail/detail.module#DetailPageModule' },
  { path: 'edit/:key', loadChildren: './CadastroBeneficio/edit/edit.module#EditPageModule' },
  { path: 'cadastroBeneficio', loadChildren: './CadastroBeneficio/cadastro-beneficio/cadastro-beneficio.module#CadastroBeneficioPageModule' },
  { path: 'homeAssociado', loadChildren: './CadastroAssociado/home-associado/home-associado.module#HomeAssociadoPageModule' },
  { path: 'createAssociado', loadChildren: './CadastroAssociado/create-associado/create-associado.module#CreateAssociadoPageModule' },
  { path: 'detailAssociado/:key', loadChildren: './CadastroAssociado/detail-associado/detail-associado.module#DetailAssociadoPageModule' },
  { path: 'editAssociado/:key', loadChildren: './CadastroAssociado/edit-associado/edit-associado.module#EditAssociadoPageModule' },
  { path: 'homeEmprego', loadChildren: './CadastroEmprego/home-emprego/home-emprego.module#HomeEmpregoPageModule' },
  { path: 'homePesquisa', loadChildren: './PesquisaSatisfacao/home-pesquisa/home-pesquisa.module#HomePesquisaPageModule' },
  { path: 'Sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'createEmprego', loadChildren: './CadastroEmprego/create-emprego/create-emprego.module#CreateEmpregoPageModule' },
  { path: 'detailEmprego/:key', loadChildren: './CadastroEmprego/detail-emprego/detail-emprego.module#DetailEmpregoPageModule' },
  { path: 'homeEvento', loadChildren: './CadastroEvento/home-evento/home-evento.module#HomeEventoPageModule' },
  { path: 'createEvento', loadChildren: './CadastroEvento/create-evento/create-evento.module#CreateEventoPageModule' },
  { path: 'detailEvento/:key', loadChildren: './CadastroEvento/detail-evento/detail-evento.module#DetailEventoPageModule' },

 

];

@NgModule({
  imports: [  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
