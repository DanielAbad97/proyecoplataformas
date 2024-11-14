import { Routes } from '@angular/router';
import { InicioAComponent } from './components/admin/inicio-a/inicio-a.component';
import { PerfilComponent } from './components/cliente/perfil/perfil.component';
import { IniciopComponent } from './components/iniciop/iniciop.component';
import { InicioComponent } from './components/cliente/inicio/inicio.component';
import { ArriendosComponent } from './components/admin/arriendos/arriendos.component';
import { EspaciosComponent } from './components/admin/espacios/espacios.component';
import { HorariosComponent } from './components/admin/horarios/horarios.component';
import { TarifasComponent } from './components/admin/tarifas/tarifas.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';

export const routes: Routes = [
    {
        path:"",
        component:IniciopComponent
    },
    {
        path:"admin",
        component:InicioAComponent
    },
    {
        path:"admin/arriendos",
        component:ArriendosComponent
    },
    {
        path:"admin/espacios",
        component:EspaciosComponent
    },
    {
        path:"admin/horarios",
        component:HorariosComponent
    },
    {
        path:"admin/tarifas",
        component:TarifasComponent
    },
    {
        path:"admin/usuarios",
        component:UsuariosComponent
    },
    {
        path:"cliente",
        component:InicioComponent
    },
    {
        path:"cliente/perfil",
        component:PerfilComponent
    }
];
