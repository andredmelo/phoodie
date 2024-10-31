const emailRegex = /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0+]?[0-9]{10}$/im;
/* const addressRegex = /^[0-9]{1,4}(([\-\/][0-9]{1,4})|(\/[ABCDFGHJKLMNPRSTV]{1,2}))*$/im; */
const addressRegex = /^[0-9]|[ABCDFGHJKLMNPRSTV]{7}$/im;

function validateEmail(val: string): boolean {
  return emailRegex.test(val);
}

function validatePhone(val: string): boolean {
  return phoneRegex.test(val);
}

function validateAddress(val: string): boolean {
  return addressRegex.test(val);
}

export { validateEmail, validatePhone, validateAddress};