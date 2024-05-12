//ա) դրանք երկուսն էլ կենտ են,
// function sum(a, b) {
//   if (a % 2 && b % 2 !== 0) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// sum(10, 2);

// բ) դրանցից գոնե մեկը կենտ է,

// function sum(a, b) {
//   if (a % 2 !== 0 || b % 2 !== 0) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// sum(3, 2);

//գ) դրանցից ճիշտ մեկը կենտ է,

// function sum(a, b) {
//   if (a % 2 === 0 || b % 2 === 0) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// sum(4, 5);

//դ) դրանք երկուսն էլ կենտ են կամ երկուսն էլ զույգ:

// function sum(a, b) {
//   if ((a % 2 === 0 && b % 2 === 0) || (a % 2 !== 0 && b % 2 !== 0)) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// sum(4, 8);

//2. Տրված են a, b և c ամբողջ թվերը: Արտածել YES, եթե դրանցից

//ա) գոնե մեկը զրո է,

// function number(a, b, c) {
//   if (a == 0 || b == 0 || c == 0) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// number(0, 5, 7);

//բ) ճիշտ մեկը հինգ է,

// function number(a, b, c) {
//   if (
//     (a == 5 && b !== 5 && c !== 5) ||
//     (a !== 5 && b == 5 && c !== 5) ||
//     (a !== 5 && b !== 5 && c == 5)
//   ) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// number(5, 1, 4);

//գ) ոչ մեկը մյուսներին հավասար չէ

// function number(a, b, c) {
//   if (a !== b && b !== c && a !== c) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// number(4, 2, 3);

// դ) ճիշտ երկուսն են հավասար,

// function number(a, b, c) {
//   if ((a == b && b !== c) || (b == c && c !== a) || a == c) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// number(5, 5, 1);

//ե) բոլոր երեքն իրար հավասար են,

// function number(a, b, c) {
//   if (a == b && b == c && c == a) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// number(5, 5, 5);

//զ) գոնե մեկը բացասական է,

// function number(a, b, c) {
//   if (a < 0 || b < 0 || c < 0) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// number(4, 5, 2);
