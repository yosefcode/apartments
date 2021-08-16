const mongoose = require("mongoose");

const ApartmentSchema = new mongoose.Schema({
  image: String,
  rooms: Number,
  beds: Number,
  price: Number,
  area: String,
  city: String,
  phone: String,
  short: String,
  long: String,
});

const Apartment = mongoose.model("Apartments", ApartmentSchema);

const product1 = new Apartment({
  image: "https://zarfati-zvi.com/wp-content/uploads/2014/12/gallery_12.jpg",
  rooms: 3,
  beds: 10,
  price: 1000,
  area: "north",
  city: "טבריה",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product2 = new Apartment({
  image:
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
  rooms: 7,
  beds: 15,
  price: 600,
  area: "north",
  city: "צפת",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product3 = new Apartment({
  image:
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
  rooms: 2,
  beds: 8,
  price: 400,
  area: "south",
  city: "באר שבע",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product4 = new Apartment({
  image:
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
  rooms: 9,
  beds: 56,
  price: 9020,
  area: "south",
  city: "נתיבות",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product5 = new Apartment({
  image: "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
  rooms: 4,
  beds: 22,
  price: 850,
  area: "center",
  city: "תל אביב",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product6 = new Apartment({
  image: "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
  rooms: 7,
  beds: 17,
  price: 1260,
  area: "center",
  city: "בני ברק",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product7 = new Apartment({
  image:
    "https://images2.madlan.co.il/t:nonce:v=2;resize:height=328;convert:type=webp/bulletin/6RkYPnwONK/bunRIR.jpg",
  rooms: 18,
  beds: 250,
  price: 23650,
  area: "jerusalem",
  city: "ירושלים",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product8 = new Apartment({
  image: "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  rooms: 6,
  beds: 4,
  price: 2000,
  area: "jerusalem",
  city: "בית שמש",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

// product1.save();
// product2.save();
// product3.save();
// product4.save();
// product5.save();
// product6.save();
// product7.save();
// product8.save();

module.exports = Apartment;
