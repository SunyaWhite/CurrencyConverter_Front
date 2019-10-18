
export class CurrencyRequest
{
    public bankCode : string;
    public date : Date;

    constructor(_code : string, _date : Date)
    {
        this.bankCode = _code;
        this.date = _date;
    }
}