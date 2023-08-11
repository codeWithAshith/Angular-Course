import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (control.value === 'code') resolve({ shouldBeUnique: true });
        else resolve({ shouldBeUnique: false });
      }, 2000);
    });
  }
}
