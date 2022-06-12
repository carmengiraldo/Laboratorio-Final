import { Socio} from "../entities/Socio";

export interface DialogData {
  socio: Socio;
  editMode: boolean;
  numerosSocio: string[];
}