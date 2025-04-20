function Cart() {
    const monstera = "Monstera";
    const lierre = "Lierre";
    const bouquet = "Bouquet";
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const bouquetPrice = 15;
    return (<div><ul><li>{monstera}-{monsteraPrice}</li><li>{lierre}-{lierrePrice}</li><li>{bouquet}-{bouquetPrice}</li></ul><p>Total : {monsteraPrice+lierrePrice+bouquetPrice}</p></div>)
  }

  export default Cart;