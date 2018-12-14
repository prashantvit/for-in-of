const obj = {
  a: 1,
  b: 2
};

for (let key in obj) {
  console.log(key, obj[key]);
}

const arr = [1, 2, 3, 4, 5];
for (let item of arr) {
  console.log(item);
}
