import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "src/app/components/home/home.component";
import {UsuarioComponent} from "./components/usuario/usuario.component";
import {UsuarioDetalleComponent} from "src/app/components/usuario/usuario-detalle.component";
import {UsuarioEditarComponent} from "src/app/components/usuario/usuario-editar.component";
import {UsuarioNuevoComponent} from "src/app/components/usuario/usuario-nuevo.component";

//Importamos el archivo de rutas hijas
import {USUARIOS_ROUTES} from "./components/usuario/usuario.routes";
const app_routes:Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'usuario', component: UsuarioComponent,

    //Creando rutas hijas
    //Lepasamos un objeto en otro archivo con las rutas hijas
    children: USUARIOS_ROUTES


  },


  {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
