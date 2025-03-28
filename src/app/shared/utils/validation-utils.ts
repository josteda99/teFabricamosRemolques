import { Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export const emailPattern: ValidatorFn = Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

export const phonePattern: ValidatorFn = Validators.pattern(/^[+]?[0-9]{1,4}?[(]?[0-9]{1,5}[)]?[-\s.]?[0-9]{3,4}[-\s.]?[0-9]{4,6}$/);

export const noWhitespaceValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (typeof control.value === 'string') {
    const value = control.value as string;
    if (value && value.trim().length === 0) return { whitespace: true };
  }
  return null;
};

const MILISECONDS_IN_YEAR = 31557600000;

export const adultAgeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;

  // Validate adult age (no harcoded values) Format: DD.MM.YYYY
  const dateParts = control.value.split('.');
  const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  const age = Math.floor((new Date().getTime() - dateObject.getTime()) / MILISECONDS_IN_YEAR);

  if (age < 18) {
    return { invalid: true };
  }

  return null;
};

export const dateFormatValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;

  // Validate date format: DD.MM.YYYY
  const dateRegex = new RegExp('^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\\d\\d$');
  if (!dateRegex.test(control.value)) {
    return { invalid: true };
  }

  return null;
};

export const validatorForm = {
  minLength: Validators.maxLength(50),
  maxLength: Validators.minLength(1),
  phonePattern: Validators.pattern(/^\+?[0-9]{6,20}$/),
  birthdayLength: Validators.maxLength(10),
  phoneMaxLength: Validators.maxLength(20),
  postCodeLength: Validators.maxLength(10)
};

export const booleanTrueValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (control.value) {
    return null;
  }
  return { notChecked: true };
};
