const { Base } = require('./base')

class Onchain extends Base {
    /**
     *  Create Lighning invoice.
     * 
     * @function sendBitcoin
     * @description Send Bitcoin,
     * @param  {JSON} data
     * data = {
            satoshis: 3000,
            address: "tb1q9h0yjdupyfpxfjg24rpx755xrplvzd9hz2nj7v",
            customerEmail: "customer@email.com",
            description: "lorem ipsum",
            priorityLevel: "high"
        } 
        required_data = satoshis, address, customerEmail
     * @returns
    */
    async sendBitcoin(data) {
        const url = '/wallets/send_bitcoin';
        const method = 'post';
        const response = await this.sendRequest(url, method, data)
        return response
    }

    /**
     * @function generateAddress
     * @description Generates Address for customer,
     * @param  {JSON} data
     * data ={
            label: "purchase xbox",
            customerEmail: "customer@gmail.com"
        }
     * @returns {JSON}
     */
    async generateAddress(data) {
        const url = '/addresses/generate';
        const method = 'post';
        const response = await this.sendRequest(url, method, data)
        return response
    }

    /**
     * @function listAddresses
     * @description Getting addresses attached to company,
     * @returns {[JSON]}
     */
    async listAddresses(params = {}) {
        const fixedParams = dynamicParam(params);
        const url = '/addresses/?' + fixedParams;
        const method = 'get';
        const response = await this.sendRequest(url, method)
        return response
    }
}

module.exports = {
    Onchain,
}