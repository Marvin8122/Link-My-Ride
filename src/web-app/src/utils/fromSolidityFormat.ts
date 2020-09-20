import { Currency } from "../enums"
import BigNumber from "bignumber.js"

// Converts BigNumber with the amount of decimal places expected by the Solidity to human-friendly amount
export const fromSolidityFormat = (amount: BigNumber, currency: Currency) => {

    const ETH = new BigNumber("10e18")
    const FIAT = new BigNumber("10e8")

    const amountAsBN = new BigNumber(amount)

    let result = new BigNumber(0)

    switch (+currency) {
        case Currency.ETH:
            result = amountAsBN.dividedBy(ETH)
            break
        case Currency.USD:
            result = amountAsBN.dividedBy(FIAT)
            break
        case Currency.GBP:
            result = amountAsBN.dividedBy(FIAT)
            break
        case Currency.AUD:
            result = amountAsBN.dividedBy(FIAT)
            break
    }

    return result.decimalPlaces(2).toFixed(2)
}