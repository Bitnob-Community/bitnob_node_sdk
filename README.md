# Bitnob
---
This is a Node library for easy integration of Bitnob For Business API for various applications from Bitnob.

## Getting started

### Requirements
This library requires NodeJS >= 12.0

### Installation 
- `npm install bitnob`
- `yarn add bitnob`

### Usage
This SDK can be used both for Bitnob Sandbox and Production API. 
### Setting ENV KEYS
For sucessfully running of the SDK; the `BITNOB_API_KEY`.

Now this will throw a `BitnobBadKeyError` if you do not set it as an environment variable, when initiatizing a function.

By default the SDK assumes that you are currently work on production, and your `BITNOB_API_KEY` must be a production-grade secret key. 

To run on sandbox(development mode), set `BITNOB_PRODUCTION=false` as an environment variable.

### Instantiate The Bitnob Functions
Before making use of any bitnob functions, it should be instantiated. Below is a demonstration:

```javascript
import { Lightning, Customer } from bitnob
const ln = new Lightning()
const customer = new Customer()
```

- `Onchain()`
- `Wallets()`


#### Customers

- To manage customers in your application, instantiate a new `Customer` class.
    - The following functions are available:
        - createCustomer
        - getCustomerByEmail 
        - getCustomer 
        - updateCustomer

### Lightning
- To create Lightning Transactions, instantiate a new `Lightning` class.
    - The following functions are available:
        - createInvoice
        - payInvoice 
        - initiatePayment
        - decodePaymentRequest 
        - getInvoice


#### Full Lightning Workflow 
```javascript
    import { Lightning } from bitnob

    const ln = new Lightning()

    payload = {
        "customerEmail": "bernard@bitnob.com",
        "description": "Enjoy Life!",
        "tokens": 300,
        "expires_at": "24h",
        "private": false,
        "is_including_private_channels": false,
        "is_fallback_included": true,
    }

    # Create a lightning invoice 

   new_ln_invoice = ln.createInvoice(payload).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
    
```
### Onchain 
- To create Onchain Transactions, instantiate a new `Onchain` class.
    - The following functions are available:
        - sendBitcoin
        - generateAddress
        - listAddresses


#### Full Onchain Transaction Workflow

```javascript

    import { Onchain } from bitnob

    const onChain = new Onchain()

    payload = {
        "customerEmail": "bernard@bitnob.com",
        "reference": "txt-ref-09fdcsf-7658dcgfh-84738pokli",
        "satoshis": 30000,
        "address": "btcjshlidlsidskdslisidsdosilsdmxksjsjldksossjoioidjifkji.zjijsi",
        "description": "Go buy your momma a house!",
        "priorityLevel": "priority"
    }

    # Send bitcoin using onchain 

    new_onchain = onChain.sendBitcoin(payload)).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });

```

### Wallets 
- To get wallets information, simply follow the instruction at the beginning of this sub-heading and instantiate a new `Wallets` class.
    - The following functions are available:
        - walletDetails
        - listTransactions
        - getTransaction

### Webhook Authentication
- The Bitnob SDK comes with a function that enables your business authenticate events sent to your webhook. It is advised to authenticate all requests sent to your endpoint to avoid fake transactions. 

#### Usage
```javascript
    import { webhookAuthentication } from 'bitnob';

    // Using Express
    app.post("/webhook_url", function(req, res) {
        if (webhookAuthentication(req)){
            const event = req.body;
            // Do something with event  
            res.send(200);
        };
    };
```

## Development 


## Contributing 

Bug reports and pull requests are welcome on GitHub at [https://github.com/bitnob/bitnob_node_sdk](https://github.com/bitnob/bitnob_node_sdk). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the code of conduct. Simply create a new branch and raise a Pull Request, we would review and merge. 

## License

The library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT)