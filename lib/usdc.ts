import { Base, dynamicParam } from './base';

class USDC extends Base {
    /**
    * @function createUsdcAddress
    * @description Create address.
    * @param {JSON} data
    * data = {
            customerEmail: "customer@gmail.com",
            label: "label of payment",
        }
    * @return {JSON} usdc address for customer.
    */
    async createUsdcAddress(data:any) {
        const requiredData = ["customerEmail", "labdl"]
        this.checkParameter(requiredData, data)

        const url = '/addresses/generate/usdc';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
     * @function sendUsdc
     * @description Send USDC,
     * @param  {JSON} data
     * data = {
            amount: 3000,
            address: "tb1q9h0yjdupyfpxfjg24rpx755xrplvzd9hz2nj7v",
            description: "lorem ipsum",
        } 
        required_data = amount, address
     * @returns
    */
    async sendUsdc(data:any) {
        const requiredData = ["amount", "address"]
        this.checkParameter(requiredData, data)
        const url = '/wallets/send-usdc';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error) {
            throw error   
        }
    }
}

export default USDC;