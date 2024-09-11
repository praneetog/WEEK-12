"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'Praneet', age: 20 }, { name: 'Avneet', age: 23 });
console.log(age);
