var chevy = {
  make: 'Chevy',
  model: 'Bel Air',
  year: 1957,
  color: 'red',
  passengers: 2,
  convertible: false,
  mileage: 1021,
};

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}

var worthALook = prequal(chevy);
if (worthALook) {
  console.log('You gotta check out this ' + chevy.make + ' ' + chevy.model);
} else {
  console.log(
    'You should really pass on the ' + chevy.make + ' ' + chevy.model
  );
}
