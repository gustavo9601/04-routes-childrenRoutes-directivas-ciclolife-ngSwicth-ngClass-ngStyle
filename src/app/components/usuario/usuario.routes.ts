import { Routes} from '@angular/router';
import {UsuarioNuevoComponent} from "src/app/components/usuario/usuario-nuevo.component";
import {UsuarioDetalleComponent} from "src/app/components/usuario/usuario-detalle.component";
import {UsuarioEditarComponent} from "src/app/components/usuario/usuario-editar.component";


export const USUARIOS_ROUTES:Routes = [
  {path: 'nuevo', component: UsuarioNuevoComponent},
  {path: 'editar', component: UsuarioEditarComponent},
  {path: 'detalle', component: UsuarioDetalleComponent},
  //Un Default dentro de las rutas hijas
  {path: '**', pathMatch: 'full', redirectTo: 'nuevo'}
];
