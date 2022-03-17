import { Base, dynamicParam } from './base';

class Wallet extends Base {
    
    /**
    * @function walletDetails
    * @description Retrive company wallet details
    * @return {JSON} Company Wallet Info
    */
    async walletDetails() {
        const url = '/wallets';
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error) {
            throw error
        }
    }

    /**
    * @function listTransactions
    * @description Getting a transaction based on transaction_id 
    * @param {JSON} params can be empty or any of the following:
    * order = (optional) Result order. Accepted values: `DESC` (default), ASC
    * page = (optional) Result page.
    * take = (optional) Number of results per request. Accepted values: 0 - 100. Default 10
    * @return {JSON} Transaction Details
    */
    async listTransactions(params = {}) {
        const fixedParams = dynamicParam(params);
        const url = '/transactions/?' + fixedParams;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error) {
            throw error
        }
    }

    /**
    * @function getTransaction
    * @description Getting a transaction based on transaction_id 
    * @return {JSON} Transaction Details
    */
    async getTransaction(transaction_id:string) {
        const url = '/customers/' + transaction_id;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error) {
            throw error
        }
    }

    /**
    * @function swapBtcToUsd
    * @description Swap Btc to Usd.
    * @param {number} amount - BTC amount to be swapped for USD.
    * @return {JSON}.
    */
         async swapBtcToUsd(amount:number) {
            const data = {
                "amount" : amount
            }
            const url = '/wallets/swap-bitcoin-usd';
            const method = 'post';
            try {
                const response = await this.sendRequest(url, method, data)
                return response
            } catch (error:any) {
                throw error
            }
        }
    
        /**
         * @function swapUsdToBtc
         * @description Swap Usd to Btc,
         * @param {number} amount - USD amount to be swapped for BTC.
         * @returns
        */
        async swapUsdToBtc(amount:number) {
            const data = {
                "amount" : amount
            }
            const url = '/wallets/swap-usd-bitcoin';
            const method = 'post';
            try {
                const response = await this.sendRequest(url, method, data)
                return response
            } catch (error) {
                throw error   
            }
        }
}

export default Wallet;