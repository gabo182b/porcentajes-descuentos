function discountedPriceCalculator(price, discount) {
  const percentageDiscountedPrice = 100 - discount;
  const discountedPrice = (price * percentageDiscountedPrice) / 100;

  return discountedPrice;
}

console.log(discountedPriceCalculator(3000, 12));
