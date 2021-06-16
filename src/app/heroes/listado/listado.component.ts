import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  leagueJustice :string[]= ['Superman', 'Batman', 'Wonder Woman', 'Aquaman'];
  heroeBorrado :string[]=[];


  BorrarHeroe(){

    //una forma para borrar
   const HeroeBorrado=this.leagueJustice.splice(-1,1);

    console.log(HeroeBorrado);

    this.heroeBorrado=HeroeBorrado


  }
}
