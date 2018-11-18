function findTenDigitPrime(numberToSearch) {
  alert("findTenDigitPrime was called");
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
  alert("processNumber was called");
  var numberAsString = num.toString();
  var processedNum = num.replace('.', "");

  return processedNum;
}

//Implementation of the Primality Test
//https://en.wikipedia.org/wiki/Primality_test#Pseudocode
function isPrime(num) {
  alert("isPrime was called")
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 == 0 || n % 3 == 0) {
    return false;
  }

  var i = 5;
  while (i * i <= num) {
    if (n % i == 0 || n % (i+2) == 0) {
      return false;
    }
    i = i + 6;
  }
  return true;
}

//Run
function findPrime() {
  alert("findPrime was called");
  let input = document.getElementById("primeUserInput").value;
  let output = findTenDigitPrime(input);
  document.getElementById(primeOutput).innerHTML = output;
}
