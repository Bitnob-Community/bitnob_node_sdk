import { Base, dynamicParam } from './base';

class Swap extends Base {
    /**
    * @function swapBtcToUsd
    * @description Create a customer.
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
     * @description Send USDC,
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

export default Swap;