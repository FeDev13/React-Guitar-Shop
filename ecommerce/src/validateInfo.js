import valid from "card-validator";

export default function validateInfo(values) {
  let errors = {};
  let creditCard = valid.number(values.cardNumber);

  creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
  creditCard.cvv = valid.cvv(values.cardSecurityCode);
  creditCard.cardholderName = valid.cardholderName(values.cardName);
  creditCard.postalCode = valid.postalCode(values.cardPostalCode);

  errors.show = true;
  errors.variant = "danger";
  errors.message = "Ocurrio un error inesperado. Intente mas tarde";
  errors.cname = false;
  errors.cnumber = false;
  errors.ctype = false;
  errors.cexp = false;
  errors.ccvv = false;
  errors.cpostal = false;

  if (values.cardPostalCode === null || !values.cardPostalCode.trim()) {
    errors.message = "DNI incompleto";
  } else if (creditCard.postalCode.isValid) {
    errors.cpostal = true;
  } else {
    errors.message = "DNI erroneo";
  }

  // chequea ccv
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message = "CVC incompleto";
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    errors.message = "CVC no es valido";
  }

  //chequea fecha de vencimiento
  if (values.cardExpiration === null || !values.cardExpiration.trim()) {
    errors.message = "fecha de vencimiento incompleta";
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = "fecha de vencimiento invalida";
  }

  //chequea tipo
  if (
    values.cardType === null ||
    !values.cardType.trim() ||
    creditCard.card === null
  ) {
    errors.message = "el tipo no esta completo";
  } else if (
    creditCard.card.type &&
    creditCard.card.type.toUpperCase() === values.cardType.toUpperCase()
  ) {
    errors.ctype = true;
  } else {
    errors.message = "el tipo es invalido";
  }

  //chequea numero
  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.message = "el numero de la tarjeta esta incompleto";
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = "el numero de la tarjeta es invalido";
  }

  //chequea nombre y apellido
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = "nombre y apellido incompleto";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "nombre y apellido son invalidos";
  }

  if (
    errors.ctype &&
    errors.cname &&
    errors.cnumber &&
    errors.cexp &&
    errors.cpostal &&
    errors.ccvv
  ) {
    errors.variant = "success";
    errors.message = "La tarjeta de credito es valida";
  }

  return errors;
}
