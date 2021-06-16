import { ListadoComponent } from './listado/listado.component';
import { HeroesComponent } from './heroe/heroes.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";







@NgModule({

  declarations:[

    HeroesComponent,
    ListadoComponent

  ],
  exports:[

    ListadoComponent

  ],
  imports:[

    CommonModule
  ]


})
export class HeroesDcModule { }

