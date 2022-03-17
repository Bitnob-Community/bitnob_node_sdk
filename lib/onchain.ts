import { Base, dynamicParam } from './base';
import {WalletAddress, Transaction} from './model';

class Onchain extends Base {

    private generateAddressObject(data:any){
        const wallet = new WalletAddress(
            data.address,
            data.addressType,
            data.label
        );
        return wallet
    }

    private generateTransactionObject(data:any){
        const trans = new Transaction(
           data.id, 
           data.reference, 
           data.amount, 
           data.fees, 
           data.btcFees, 
           data.satFees, 
           data.sat_amount, 
           data.spotPrice, 
           data.action,
           data.type, 
           data.status, 
           data.channel, 
           data.payment_request, 
           data.description, 
           data.address, 
           data.hash,
           data.confirmations, 
           data.invoiceId

        )
        return trans
    }
    /**
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
    async sendBitcoin(data:any) {
        const requiredData = ["satoshis", "address", "customerEmail"]
        this.checkParameter(requiredData, data)
        const url = '/wallets/send_bitcoin';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            const trans = this.generateTransactionObject(response.data)
            return trans
        } catch (error) {
            throw error   
        }
    }

    /**
     * @function generateAddress
     * @description Generates BTC Address for customer,
     * @param  {JSON} data
     * data ={
            label: "purchase xbox",
            customerEmail: "customer@gmail.com"
        }
     * @returns {JSON}
     */
    async generateAddress(data:any) {
        const requiredData = ["label", "customerEmail"]
        this.checkParameter(requiredData, data)
        const url = '/addresses/generate';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            const address = this.generateAddressObject(response.data)
            return address
        } catch (error) {
            throw error   
        }
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
        try {
            const response = await this.sendRequest(url, method)
            const data:any[] = response.data.address
            const addressObjects = data.map((item  => this.generateAddressObject(item)))
            return addressObjects
        } catch (error) {
            throw error
        }
    }

    /**
     * @function getRecommendedBtcFees
     * @description Gets Recommended Fees for BTC Onchain Transaction,
     * @returns {[JSON]}
     */
     async getRecommendedBtcFees(params = {}) {
        const url = '/recommended-fees/btc';
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error) {
            throw error
        }
    }
}

export default Onchain;