function checkout(items) {
  const prices = {
    A: 50,
    B: 30,
    C: 20,
    D: 15,
    E: 40,
    F: 10,
    G: 20,
    H: 10,
    I: 35,
    J: 60,
    K: 70,
    L: 90,
    M: 15,
    N: 40,
    O: 10,
    P: 50,
    Q: 30,
    R: 50,
    S: 20,
    T: 20,
    U: 40,
    V: 50,
    W: 20,
    X: 17,
    Y: 20,
    Z: 21,
  };

  const special_double_offers = {
    A: [{ quantity: 5, price: 200 }, { quantity: 3, price: 130 }],
    H: [{ quantity: 10, price: 80 }, { quantity: 5, price: 45 }],
    V: [{ quantity: 3, price: 130 }, { quantity: 2, price: 90 }],
  };
  const special_price_offers = {
    B: { quantity: 2, price: 45 },
    K: { quantity: 2, price: 120 },
    P: { quantity: 5, price: 200 },
    Q: { quantity: 3, price: 80 },
  };
  const special_extra_offers = {
    F: { quantity: 2, free: 'F' },
    U: { quantity: 3, free: 'U' },
  };
  const special_free_offers = {
    E: { quantity: 2, free: 'B' },
    N: { quantity: 3, free: 'M' },
    R: { quantity: 3, free: 'Q' },
  };

  // check if items is empty
  if (!items) {
    return 0;
  }

  // check if items is a string
  if (typeof items !== 'string') {
    return -1;
  }

  // count the frequency of each item
  const itemCounts = Array.from(items).reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});
  console.log("item", itemCounts)
  let totalPrice = 0;

  // check if items contain only valid items
  if (Object.keys(itemCounts).some((item) => !(item in prices))) {
    return -1;
  }

  // select from special_free_offer items first if available
  for (const [freeItem, offer] of Object.entries(special_free_offers)) {
    if (freeItem in itemCounts && offer.free in itemCounts) {
      const count = itemCounts[freeItem];
      const totalFree = Math.floor(count / offer.quantity);
      if (totalFree >= 1) {
        itemCounts[offer.free] -= totalFree;
        if (itemCounts[offer.free] < 0) {
          itemCounts[offer.free] = 0;
        }
      }
    }
  }

  // apply special_combo_offers
  const specialComboOffers = ['X', 'S', 'T', 'Y', 'Z'];
  const selectedCounts = Object.fromEntries(
    Object.entries(itemCounts).filter(([item]) =>
      specialComboOffers.includes(item)
    )
  );
  const totalSelectedCount = Object.values(selectedCounts).reduce(
    (total, count) => total + count,
    0
  );

  if (totalSelectedCount >= 3) {
    totalPrice += Math.floor(totalSelectedCount / 3) * 45;

    const sortedCounter = Object.entries(selectedCounts).sort(
      (a, b) => specialComboOffers.indexOf(a[0]) - specialComboOffers.indexOf(b[0])
    );
    let totalComboRemainderCount = totalSelectedCount % 3;

    if (totalComboRemainderCount > 0) {
      let y = 0;
      while (y <= totalComboRemainderCount) {
        const [keyY, valueY] = sortedCounter[y];
        if (valueY >= totalComboRemainderCount) {
          totalPrice += prices[keyY] * totalComboRemainderCount;
          break;
        }

        const itemRemainderCount = valueY % 3;
        if (itemRemainderCount === 0) {
          y += 1;
          totalComboRemainderCount -= 1;
          continue;
        }

        totalPrice += prices[keyY] * itemRemainderCount;
        y += 1;
        totalComboRemainderCount -= valueY;
      }
    }

    itemCounts = { ...itemCounts, ...selectedCounts };
  }

  for (const [item, count] of Object.entries(itemCounts)) {
    // apply special_double_offers
    if (item in special_double_offers) {
      const offer = special_double_offers[item];
      for (const o of offer) {
        if (count >= o.quantity) {
          totalPrice += Math.floor(count / o.quantity) * o.price;
          count %= o.quantity;
        }
      }
    }

    // apply special_price_offers
    if (item in special_price_offers) {
      let offer = special_price_offers[item];
      if (count >= offer.quantity) {
        totalPrice += Math.floor(count / offer.quantity) * offer.price;
        count %= offer.quantity;
      }
    }

    // apply special_extra_offers
    if (item in special_extra_offers) {
      const offer = special_extra_offers[item];
      const offerQuantity = offer.quantity + 1;
      if (count >= offerQuantity) {
        const freeCount = Math.floor(count / offerQuantity);
        const remainderCount = count % offerQuantity;
        if (remainderCount === 1) {
          totalPrice += prices[item] * (freeCount + remainderCount);
        } else {
          totalPrice += prices[item] * (count - freeCount + remainderCount);
        }
      }
    }

    // add the price of the remaining items
    totalPrice += prices[item] * count;
  }

  return totalPrice;
}

// Example usage:
//console.log(checkout('AAA')); // Output: 130
console.log(checkout('BB')); // Output: 45
console.log(checkout('SSS')); // Output: 45
console.log(checkout('SSSZ')); // Output: 65
console.log(checkout('ZZZS')); // Output: 65
console.log(checkout('ZZZ')); // Output: 45
console.log(checkout('CXYZ'))