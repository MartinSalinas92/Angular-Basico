import { Component } from "@angular/core";


@Component({

    selector:'app-heroe',
    templateUrl:'heroes.component.html'

})

export class HeroesComponent {

    nombre :string ='Ironman';
    edad :number= 48


    obtenerNombreEdad() :string {

      return ` Su nombre es :${this.nombre} -  edad:${this.edad}`
    }


    get NombreenMayuscula(){

      return this.nombre.toUpperCase();

    }

    cambiarNombre() :void {

      this.nombre='Spiderman'
    };

    cambiarEdad() :void{

      this.edad=18
    };


}
