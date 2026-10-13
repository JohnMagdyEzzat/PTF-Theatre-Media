import { AbstractControl, ValidationErrors } from '@angular/forms';

export function urlValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null; // allow empty values, use Validators.required separately

  const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(:\d+)?(\/.*)?$/i;
  const valid = urlPattern.test(control.value);

  return valid ? null : { invalidUrl: true };
}
