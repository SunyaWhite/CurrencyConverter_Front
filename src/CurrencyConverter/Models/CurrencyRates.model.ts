import { Currency } from "./Currency.model";

export interface CurrencyRates
{
    mainCurrencyCode: string;
    date: Date;
    currencies: Array<Currency>;
}
