import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { MasVendidosComponent } from './mas-vendidos/mas-vendidos.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
      {
        path: '',
        component: PrincipalComponent
      },
      {
        path: 'novedades',
        component: MasVendidosComponent
      },
      {
        path: 'masvendidos',
        component: NovedadesComponent
     },
     {
        path: 'contacto',
        component: ContactoComponent
     }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

