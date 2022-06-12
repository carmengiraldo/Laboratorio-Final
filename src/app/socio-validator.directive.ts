import { Directive, Input } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appSocioValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SocioValidatorDirective,
    multi: true
  }]
})

export class SocioValidatorDirective {
  @Input('appSocioValidator') numerosSocio = '';

  constructor() { }
  validate(control: AbstractControl) : {[key: string] : any} | null {
    const socios = this.numerosSocio.split(',');
    if (socios.indexOf(control.value) !== -1) {
      return { 'SocioInvalid': true };
    } 
    return null;
  }
}