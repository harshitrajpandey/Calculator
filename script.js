let result = "0";

function appendToResult(value) {
  if (
    result === "0" &&
    value !== "+" &&
    value !== "-" &&
    value !== "*" &&
    value !== "/"
  ) {
    result = value;
  } else {
    result += value;
  }
  document.getElementById("result").value = result;
}

function clearResult() {
  result = "0";
  document.getElementById("result").value = result;
}

function calculateResult() {
  try {
    result = eval(result).toString();
    document.getElementById("result").value = result;
  } catch (error) {
    result = "Error";
    document.getElementById("result").value = result;
  }
}
