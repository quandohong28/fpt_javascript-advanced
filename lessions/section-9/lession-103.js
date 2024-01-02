/**
 * Section 9: Data Structures, Modern Operators and Strings
 * Lession 103: Destructuting Arrays
 * Auth: Do Hong Quan
 * Create date: 2024-02-01
 * Time : 13:24:00
 * 
 * Sumary:
 * - how to use destructuring array
 * - sort array using destructuring
 */

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// Destructuring array
let [first, second] = restaurant.categories;
// console.log(first, second);

// sort array using destructuring
[first, second] = [second, first];
// console.log(first, second);