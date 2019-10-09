export class Currency {
    public code: string;
    public rate: number;

    constructor(code: string, rate: number)
    {
        this.code = code;
        this.rate = rate;
    }
}
