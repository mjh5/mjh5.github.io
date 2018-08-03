function findTenDigitPrime(numberToSearch) {
  var numberAsString = processNumber(numberToSearch);
  for (var i = 0; i < numberAsString.length - 11; i++) {
    let tenDigits = numberAsString.substring(i, i + 11);
    let tenDigitNumber = parseInt(tenDigits);
    if (isPrime(tenDigitNumber) {
      return tenDigitNumber;
    }
  }

  return "No ten digit prime number was found";
}

function processNumber(num) {
  var numberAsString = num.toString();
  var processedNum = num.replace('.', "");

  return processedNum;
}

function isPrime(num) {

}

//Run and Test function
function run() {

}
