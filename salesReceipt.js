const subTotalForThisOrder = 17.24
const taxRateforPalmBeach = 0.07

function calculateSalesTax(subTotal,taxRate) {
    return subTotal * taxRate; // multiply the sub total with the tax rate passed in as parameters
}

const taxTotal = calculateSalesTax(subTotalForThisOrder,taxRateforPalmBeach)
const total = subTotalForThisOrder + taxTotal

console.log("Subtotal:      $:",subTotalForThisOrder)
console.log("Tax:           $: ",taxTotal)
console.log("-------------------------")
console.log("Total:         $:",total)