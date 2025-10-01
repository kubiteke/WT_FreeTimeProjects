let orders = [
  { table: 1, meal: "Pizza", price: 50 },
  { table: 2, meal: "Burger", price: 40 },
];

// Yeni sipariş ekleme
function siparisAlma(table, meal, price) {
  orders.push({ table, meal, price });
}

// Yanlış sipariş silme

function siparisSil(orderArray, mealName) {
  for (let i = orderArray.length - 1; i >= 0; i--) {
    if (orderArray[i].meal === mealName) {
      orderArray.splice(i, 1);
    }
  }
}

//Tüm siparişleri for döngüsü ile ekrana yazdırma
function siparisDokum(orderArray) {
  for (let i = 0; i < orderArray.length; i++) {
    console.log(orderArray[i]);
  }
}

// Toplam hesabı bulma

function toplamHesap(orderArray) {
  let hesap = 0;
  for (let i = 0; i < orderArray.length; i++) {
    hesap = hesap + orderArray[i].price;
  }
  return hesap;
}

// Belli bir masa siparişi

function masaDokum(orderArray, orderTable) {
  for (let i = 0; i < orderArray.length; i++) {
    if (orderArray[i].table === orderTable) {
      console.log(orderArray[i].meal);
    }
  }
}

// Masa hesabı

function masaHesap(orderArray, orderTable) {
  let masaHesap = 0;
  for (let i = 0; i < orderArray.length; i++) {
    if (orderArray[i].table === orderTable) {
      masaHesap = masaHesap + orderArray[i].price;
    }
  }
  if (masaHesap > 200) {
    console.log("İndirim uygulanır");
  }
}
