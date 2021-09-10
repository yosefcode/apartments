const mongoose = require("mongoose");

const ApartmentSchema = new mongoose.Schema({
  firstImage: String,
  images: Array,
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
  firstImage:
    "https://zarfati-zvi.com/wp-content/uploads/2014/12/gallery_12.jpg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],
  rooms: 8,
  beds: 10,
  price: 1000,
  area: "צפון",
  city: "מירון",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product2 = new Apartment({
  firstImage:
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],

  rooms: 7,
  beds: 15,
  price: 600,
  area: "צפון",
  city: "קרית שמונה",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product3 = new Apartment({
  firstImage:
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
  rooms: 2,
  beds: 8,
  price: 400,
  area: "דרום",
  city: "תפרח",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product4 = new Apartment({
  firstImage:
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],

  rooms: 9,
  beds: 56,
  price: 9020,
  area: "דרום",
  city: "אופקים",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product5 = new Apartment({
  firstImage: "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
  rooms: 4,
  beds: 22,
  price: 850,
  area: "מרכז",
  city: "פתח תקוה",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product6 = new Apartment({
  firstImage: "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],

  rooms: 7,
  beds: 17,
  price: 1260,
  area: "מרכז",
  city: "ראשון לציון",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product7 = new Apartment({
  firstImage:
    "https://images2.madlan.co.il/t:nonce:v=2;resize:height=328;convert:type=webp/bulletin/6RkYPnwONK/bunRIR.jpg",
  rooms: 18,
  beds: 250,
  price: 23650,
  area: "ירושלים",
  city: "ביתר",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product8 = new Apartment({
  firstImage:
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  rooms: 6,
  beds: 4,
  price: 2000,
  area: "ירושלים",
  city: "תל ציון",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product9 = new Apartment({
  firstImage:
    "https://zarfati-zvi.com/wp-content/uploads/2014/12/gallery_12.jpg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],
  rooms: 8,
  beds: 10,
  price: 1000,
  area: "צפון",
  city: "צפת",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product10 = new Apartment({
  firstImage:
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],

  rooms: 7,
  beds: 15,
  price: 600,
  area: "צפון",
  city: "יבניאל",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product11 = new Apartment({
  firstImage:
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
  rooms: 2,
  beds: 8,
  price: 400,
  area: "דרום",
  city: "נתיבות",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product12 = new Apartment({
  firstImage:
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],

  rooms: 9,
  beds: 56,
  price: 9020,
  area: "דרום",
  city: "באר שבע",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product13 = new Apartment({
  firstImage: "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
  rooms: 4,
  beds: 22,
  price: 850,
  area: "מרכז",
  city: "בני ברק",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product14 = new Apartment({
  firstImage: "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],

  rooms: 7,
  beds: 17,
  price: 1260,
  area: "מרכז",
  city: "תל אביב",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product15 = new Apartment({
  firstImage:
    "https://images2.madlan.co.il/t:nonce:v=2;resize:height=328;convert:type=webp/bulletin/6RkYPnwONK/bunRIR.jpg",
  rooms: 18,
  beds: 250,
  price: 23650,
  area: "ירושלים",
  city: "ירושלים",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product16 = new Apartment({
  firstImage:
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  rooms: 6,
  beds: 4,
  price: 2000,
  area: "ירושלים",
  city: "בית שמש",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});
const product17 = new Apartment({
  firstImage:
    "https://zarfati-zvi.com/wp-content/uploads/2014/12/gallery_12.jpg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],
  rooms: 8,
  beds: 10,
  price: 1000,
  area: "צפון",
  city: "מירון",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product18 = new Apartment({
  firstImage:
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],

  rooms: 7,
  beds: 15,
  price: 600,
  area: "צפון",
  city: "קרית שמונה",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product19 = new Apartment({
  firstImage:
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
  rooms: 2,
  beds: 8,
  price: 400,
  area: "דרום",
  city: "תפרח",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product20 = new Apartment({
  firstImage:
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],

  rooms: 9,
  beds: 56,
  price: 9020,
  area: "דרום",
  city: "אופקים",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product21 = new Apartment({
  firstImage: "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
  rooms: 4,
  beds: 22,
  price: 850,
  area: "מרכז",
  city: "פתח תקוה",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product22 = new Apartment({
  firstImage: "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
  images: [
    "https://www.halel.co.il/wp-content/uploads/2018/06/DSC2016AAA_copy.jpg",
    "https://www.nadlancoda.co.il/wp-content/uploads/2021/08/3V8A3198-26.jpg",
    "https://zimuki.com/wp-content/uploads/2019/02/Jerusalem.of_.gold_.3br.apt0003.jpg",
    "https://dira4u.co.il/storage/2020/10/1-2.jpeg",
    "https://pics.yad2.co.il/Pics/2018/03/20180321164933.jpg",
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  ],

  rooms: 7,
  beds: 17,
  price: 1260,
  area: "מרכז",
  city: "ראשון לציון",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product23 = new Apartment({
  firstImage:
    "https://images2.madlan.co.il/t:nonce:v=2;resize:height=328;convert:type=webp/bulletin/6RkYPnwONK/bunRIR.jpg",
  rooms: 18,
  beds: 250,
  price: 23650,
  area: "ירושלים",
  city: "ביתר",
  phone: "050-9876543",
  short: "קק, צמוד לבית כנסת, מרחבי דשא.",
  long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
});

const product24 = new Apartment({
  firstImage:
    "https://images1.calcalist.co.il/PicServer3/2018/07/22/834349/3L.jpg",
  rooms: 6,
  beds: 4,
  price: 2000,
  area: "ירושלים",
  city: "תל ציון",
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
// product9.save();
// product10.save();
// product11.save();
// product12.save();
// product13.save();
// product14.save();
// product15.save();
// product16.save();
// product17.save();
// product18.save();
// product19.save();
// product20.save();
// product21.save();
// product22.save();
// product23.save();
// product24.save();

module.exports = Apartment;
