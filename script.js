function discountedPriceCalculator(price, discount) {
  const percentageDiscountedPrice = 100 - discount;
  const discountedPrice = (price * percentageDiscountedPrice) / 100;

  return discountedPrice;
}

function cuponCheck(cupon) {
  const cuponsOptions = {
    Silver: 10,
    Gold: 25,
    Diamond: 50,
  };

  const cuponDiscount = cuponsOptions[cupon] || 0;

  return cuponDiscount;
}

function priceCalculator() {
  const inputPrice = document.getElementById("inputPrice");
  const price = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  const discount = inputDiscount.value;
  const inputCupon = document.getElementById("discount-cupon");
  const cupon = inputCupon.value;

  const discountedPrice = discountedPriceCalculator(price, discount);

  const cuponDiscount = cuponCheck(cupon);

  const newPrice = discountedPrice - cuponDiscount;

  const newTotalPrice = document.getElementById("newPrice");

  newTotalPrice.innerText = newPrice;
}
