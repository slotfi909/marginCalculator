function calculate() {
  //inputs
  var total = document.getElementById("totalId").value;
  var risk = document.getElementById("riskId").value;
  var reward = document.getElementById("rewardId").value;
  var leverage = document.getElementById("leverageId").value;
  var specifiedMoney = document.getElementById("specifiedMoneyId").value;
  var fraction = document.getElementById("fractionId").value;
  //outputs
  var margin = calcMargin(specifiedMoney, risk, leverage);
  var loss = (margin * risk * leverage) / 100;
  var recommendedLoss = total / fraction;
  var recommendedLeverage = finalLeverage(
    specifiedMoney,
    risk,
    recommendedLoss
  );
  //   }
  //setting the paraghraphs
  document.getElementById("lessThanId").innerHTML = Number(margin).toFixed(2);
  document.getElementById("worstId").innerHTML =
    Number(loss).toFixed(2) +
    " (recommended total risked money: " +
    Number(recommendedLoss).toFixed(2) +
    ", recommended leverage: " +
    (recommendedLeverage - 1) +
    "-" +
    recommendedLeverage +
    ")";
  document.getElementById("bestId").innerHTML = Number(
    (margin * reward * leverage) / 100
  ).toFixed(2);
}
// functions
function finalLeverage(specifiedMoney, risk, recommendedLoss) {
  //error handling
  if (specifiedMoney.length == 0 || risk.length == 0 || recommendedLoss == 0) {
    return NaN;
  }
  const leverageArray = [1, 2];
  while (
    leverageArray[leverageArray.length - 1] !=
    leverageArray[leverageArray.length - 2]
  ) {
    newLeverage = calcLeverage(
      calcMargin(specifiedMoney, risk, leverageArray[leverageArray.length - 1]),
      risk,
      recommendedLoss
    );
    leverageArray.push(newLeverage);
  }
  return leverageArray[leverageArray.length - 1];
}
function calcLeverage(margin, risk, recommendedLoss) {
  let i = 1;
  while (1) {
    if ((margin * risk * i) / 100 > recommendedLoss) break;
    else i++;
  }
  return i;
}
function calcMargin(specifiedMoney, risk, leverage) {
  return specifiedMoney / (1 + (risk / 100) * leverage);
}
