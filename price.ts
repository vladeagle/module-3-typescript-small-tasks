interface IPrice {
  price: number
  discount?: number
  isInstallment?: boolean
  months?: number
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months = 12,
}: IPrice): number => {
  const priceWithDiscount =
    discount && discount > 0 ? price - price * (discount / 100) : price

  return (
    Math.round(
      (isInstallment ? priceWithDiscount / months : priceWithDiscount) * 100
    ) / 100
  )
}

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
})

console.log(price)
