import { Component } from '@angular/core';
import { Socio } from './entities/Socio';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

const samples = [
  new Socio('Lourdes', 'Giraldo', '1200', '12345678A', '653532887', 'Mujer', ),
  new Socio('David', 'Perez', '100', '12141613Y', '320585655', 'Hombre', ),
  new Socio('Luis', 'Beltran', '10', '12345632B', '653232222', 'Hombre', ),
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Socio';
  displayedColumns: string[] = ['nombre', 'apellidos', 'socio', 'dni', 'telefono', 'sexo', 'actions'];
  socios: Socio[] = samples;
  socioActual: Socio = new Socio();
  editMode: boolean = false;
  
  constructor(public dialog: MatDialog) {}

  onAddSocio() {
    this.socioActual = new Socio();
    this.editMode = false;
    this.openDialog();
  }

  onEditSocio(index: number) {
    this.socioActual = this.socios[index];
    this.editMode = true;
    this.openDialog();
  }

  onDeleteSocio(index: number) {
    this.socios.splice(index, 1);
    this.socios = [ ...this.socios ];
  }

  addSocio(socioData: any) {
    const socio = new Socio(
      socioData.nombre, 
      socioData.apellidos, 
      socioData.socio,
      socioData.dni,
      socioData.telefono,
      socioData.sexo,
    );
    this.socios = [...this.socios, socio];
  }

  editSocio(socioData: any) {
    this.socioActual.nombre = socioData.nombre;
    this.socioActual.apellidos = socioData.apellidos;
    this.socioActual.socio= socioData.socio;
    this.socioActual.dni = socioData.dni;
    this.socioActual.telefono = socioData.telefono;
    this.socioActual.sexo = socioData.sexo;
    this.socios = [...this.socios];
  }

  openDialog(): void {
    const dialgoRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        socio: this.socioActual.toObject(),
        editMode: this.editMode,
        numerosSocio: this.numeroSociosValidar,
      }
    });

    dialgoRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      if (this.editMode) {
        this.editSocio(result);
      } else {
        this.addSocio(result);
      } 
      this.socioActual = new Socio();
    });
    
  } 
  

  get numeroSociosValidar(): string[] {
    let array = this.socios.map(d => d.socio);
    if (this.editMode) {
      array = array.filter(d => this.socioActual.socio !== d);
    }
    return array;
  }
}
