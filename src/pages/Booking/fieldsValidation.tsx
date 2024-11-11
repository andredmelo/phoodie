const nameRegex = /^(?:[a-zA-ZÀ-ÿ]{3,15})(?: [a-zA-ZÀ-ÿ]{3,24})?$/; // This allows accented characters and allows for two names

const emailRegex = /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0+]?[0-9]{11,13}$/im;
/* const addressRegex = /^[0-9]{1,4}(([\-\/][0-9]{1,4})|(\/[ABCDFGHJKLMNPRSTV]{1,2}))*$/im; */
const addressRegex = /^[0-9]|[ABCDFGHJKLMNPRSTV]{5,25}$/im;

function validateName(val: string): boolean {
  return nameRegex.test(val);
}

function validateEmail(val: string): boolean {
  return emailRegex.test(val);
}

function validatePhone(val: string): boolean {
  return phoneRegex.test(val);
}

function validateAddress(val: string): boolean {
  return addressRegex.test(val);
}

export { validateName, validateEmail, validatePhone, validateAddress};