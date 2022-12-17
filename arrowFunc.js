// sem arrow function
// const studios = ["20th Century Fox", "Warner Bros.", "Walt Disney Pictures"];
// let s = studios.map(function (s) {
//   return s.length;
// });
// console.log(s);

const studios = ["20th Century Fox", "Warner Bros.", "Walt Disney Pictures"];
const s = studios.map((s) => s.length);
console.log(s);

const circleArea = (r) => {
  const PI = 3.14;
  const area = PI * r * r;
  return area;
};
console.log(circleArea(2));

// se a função tiver uma única instrução podemos usar uma versão mais simples omitindo a paravra return  e as chaves 
 const circleArea2 = r => 3.14 * r ** 2;
 console.log(circleArea2(2));


 // se a função não receber nenhum argumento 
 const hello = () => console.log('hello!');
 hello();
