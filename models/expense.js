export class Expense{
    
    static count = 0;

    constructor(amount, currency, shop, comment, payer){
    this.id = ++this.constructor.count;   
    this.amount = amount;
    this.currency = currency;
    this.shop = shop;
    this.comment = comment;
    this.payer = payer;
    }
}

