import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_dCBBYp5EhqiuhJW4xrwhtQh8daWCI3tNj1SnywPk');

convertCurrency('USD', 'INR', 5);

export default async function convertCurrency(fromCurrency, toCurrency, units){
    const result = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = result.data[toCurrency];
    const finalResult = multiplier*units;
    console.log(finalResult);
}

