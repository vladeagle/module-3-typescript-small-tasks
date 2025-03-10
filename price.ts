// Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки
// на заданное количество месяцев:

const totalPrice = ({ price, discount, isInstallment, months }) => {
  // Your code here...
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250