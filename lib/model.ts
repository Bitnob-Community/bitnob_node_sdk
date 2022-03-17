import { extend } from "vue/types/umd";

class WalletAddress{
    address: string;
    address_type: string;
    label:string;

    constructor(address:string, addressType:string, label?:string) {
        this.address = address;
        this.address_type = addressType;
        this.label = label || "null"
    }
}

class Transaction {

    constructor(
        public id:string, 
        public reference:string, 
        public amount:string, 
        public fees:string, 
        public btcFees:string, 
        public satFees:string, 
        public sat_amount:string, 
        public spotPrice:string, 
        public action:string,
        public type:string, 
        public status:string, 
        public channel:string, 
        public payment_request:string, 
        public description:string, 
        public address:string, 
        public hash:string,
        public confirmations:string, 
        public invoiceId:string) {
            this.id = id
            this.reference = reference
            this.amount = amount
            this.btcFees = btcFees
            this.fees = fees
            this.satFees = satFees
            this.sat_amount = sat_amount
            this.spotPrice = spotPrice
            this.type = type
            this.status = status
            this.channel = channel
            this.action = action
            this.payment_request = payment_request
            this.description = description
            this.address = address
            this.hash = hash
            this.confirmations = confirmations
            this.invoiceId = invoiceId
        }
}

class Receipt{
    constructor(
        public id:string, 
        public reference:string, 
        public description:string, 
        public amount:number, 
        public fees:number, 
        public action:string, 
        public receipt_type:string, 
        public status:string)
    {
        this.reference =reference;
        this.description = description;
        this.amount = amount;
        this.fees = fees;
        this.action = action;
        this.receipt_type = receipt_type;
        this.status = status;
        this.id=id;
    }

    cent_amount(){
        return this.amount * 100
    }
    
    cent_fees(){
        return this.fees * 100
    }
    
    total_amount(){
        return this.amount + this.fees
    }

    total_cents(){
        return this.cent_amount() + this.cent_fees();
    }
}

class User{
    constructor(
        public id:string, 
        public email:string, 
        public firstName:string, 
        public lastName:string, 
        public countryCode:string, 
        public phone:string){
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.countryCode = countryCode;
        this.phone = phone;
    }
}

class Invoice{
    description:string;
    request:string;
    tokens:string;

    constructor(description:string, request:string, tokens:string){
        this.description = description;
        this.request = request
        this.tokens = tokens
    }
}

class Checkout{
    __generate_user_object(data:any){
        const user = new User(
            data.id,
            data.email, 
            data.firstName,  
            data.lastName, 
            data.countryCode, 
            data.phone,
        );
        return user
    }

    constructor(
        public id:string,
        public reference:string,
        public amount:string,
        public satAmountPaid:string,
        public lightningExpiresAt:string,
        public expiresAt:string,
        public satAmount:string,
        public callbackUrl :string,
        public type:string,
        public status:string,
        public successUrl:string,
        public description:string,
        public address:string,
        public lightning:string,
        public btcAmount:string,
        public customer?:any,
        public companyName?:string,
        public companyLogo?:string,
        ){
            this.id = id;
            this.reference = reference;
            this.amount = amount;
            this.satAmountPaid = satAmountPaid;
            this.lightningExpiresAt = lightningExpiresAt;
            this.expiresAt = expiresAt;
            this.satAmount = satAmount;
            this.callbackUrl = callbackUrl;
            this.type = type;
            this.status = status;
            this.successUrl = successUrl;
            this.description = description;
            this.address = address;
            this.lightning = lightning;
            this.btcAmount = btcAmount;
            this.customer = this.__generate_user_object(customer);
            this.companyName = companyName;
            this.companyLogo = companyLogo;
        }
}


class CheckoutStatus{
    constructor(
        public id:string, 
        public satAmount:string, 
        public satAmountPaid:string, 
        public status:string
    ){
        this.id = id;
        this.satAmountPaid = satAmountPaid;
        this.satAmount = satAmount;
        this.status = status;
    }
        
}

export {User, Receipt, Invoice, Checkout, CheckoutStatus, WalletAddress, Transaction}