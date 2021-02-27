import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const SenhaValidator: ValidationErrors  = (control: FormControl): ValidationErrors  => {
    if (control.value === '123') {
        return { invalido: 'A senha não pode ser 123' };
    }
    return null;
};
