// https://www.codewars.com/kata/587593285448632b8d000143
function submitOrder(user) {
  const shoppingCart, zipCode, shippingRate, orderSuccessful;

  // Get the current user's shopping cart
  OrderAPI.getShoppingCartAsync(user).then(function(cart) {
    shoppingCart = cart;
  });

  // Also look up the ZIP code from their profile
  CustomerAPI.getProfileAsync(user).then(function(profile) {
    zipCode = profile.zipCode;
  });

  // Calculate the shipping fees
  shippingRate = calculateShipping(shoppingCart, zipCode);

  // Submit the order
  OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function(success) {
    orderSuccessful = success;
  });

  console.log(
    `Your order ${orderSuccessful ? 'was' : 'was NOT'} placed successfully`
  );
}
