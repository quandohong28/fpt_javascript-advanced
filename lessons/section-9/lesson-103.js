/**
 * Section 9: Data Structures, Modern Operators and Strings
 * Lession 103: Destructuting Arrays
 * Auth: Do Hong Quan
 * Create date: 2024-02-01 13:24:00
 * Time finish: 2024-03-01 16:25:00 
 * 
 * Sumary:
 * - how to use destructuring array
 * - sort array using destructuring
 * - how to use destructuring array in function
 * - nested destructuring
 */

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

// Destructuring array
let [first, second] = restaurant.categories;
// console.log(first, second);

// sort array using destructuring
[first, second] = [second, first];
// console.log([first, second]);

// how to use destructuring array in function
const [starter, mainDish] = restaurant.order(2, 0);
// console.log(starter, mainDish);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
// console.log(i, j);

// nested destructuring in destructuring
const [i1, , [j1, k1]] = nested;
// console.log(i1, j1, k1);

// default value in destructuring
const [p, q, r] = [8, 9];
// console.log(p, q, r); // r = undefined

const [p1 = 1, q1 = 1, r1 = 1] = [8, 9];
// console.log(p1, q1, r1); // r = 1