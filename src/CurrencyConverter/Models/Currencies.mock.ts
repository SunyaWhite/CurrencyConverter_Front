import { Currency } from "./Currency.model";

export class Currencies
{
    public Currencies : Currency[] =
    [ 
        new Currency ("RUB", 3),
        new Currency ("USD", 2),
        new Currency ("EUR", 1)
    ];
}