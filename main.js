const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1981,
    end: 2008,
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 2003,
  },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ** for **
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// ** forEach **
// companies.forEach((company) => {
//   console.log(company);
// });

// ** filter **
// get 21 and older:
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// const canDrink = ages.filter((age) => {
//   if (age >= 21) {
//     return true;
//   }
// });
// const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

// const retailCorps = companies.filter(
//   (company) => company.category !== "Retail" && company.category !== "Finance"
// );
// console.log(retailCorps);

// ** map **
companies.map((company) => {
  if (company.category !== "Retail") console.log(company);
});

// ** sort **
// sort companies by start year
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// sort ages
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// ** reduce **
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(`Total Years of Companies: ${totalYears}`);

// Combine Methods
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 31)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(`Combined: ${combined}`);
