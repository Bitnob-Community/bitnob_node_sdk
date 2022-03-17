import { Base, dynamicParam } from './base';
import {Checkout, CheckoutStatus} from './model';

class HostedCheckout extends Base {
    private generateCheckoutObject(data:any) {
        const checkout = new Checkout(
            data.id,
            data.reference,
            data.amount,
            data.satAmountPaid,
            data.lightningExpiresAt,
            data.expiresAt,
            data.satAmount,
            data.callbackUrl,
            data.type,
            data.status,
            data.successUrl,
            data.description,
            data.address,
            data.lightning,
            data.btcAmount,
        );
        if (data.customer) {
            checkout.customer = data.customer;
            checkout.companyName = data.companyName;
            checkout.companyLogo = data.companyLogo;
        }
        return checkout
    }

    private generateCheckoutStatusObject(data:any) {
        const checkoutStatus = new CheckoutStatus(
            data.id,
            data.satAmountPaid,
            data.SatAmount,
            data.status
        );

        return checkoutStatus
    }

    /**
    * @function createCheckout
    * @description Create a checkout.
    * @param {JSON} data
    * data = {
            amount: 10,
            description: "description"
            customerEmail: "customer@gmail.com",
            notificationEmail: "CustomerfirstName",
            callbackUrl: "htpps://domain.com/callBack",
            successUrl: "htpps://domain.com/successUrl",
            reference: "reference"
        }
    * @return {JSON} created checkout.
    */
    async createCheckout(data:any) {
        const requiredData = ["amount", "description", "customerEmail", "notificationEmail", "callbackUrl", "successUrl", "reference"]
        this.checkParameter(requiredData, data)

        const url = '/checkout';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            const checkout = this.generateCheckoutObject(response)
            return checkout
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function listCheckouts
    * @description List Checkouts.
    * @param {JSON} params can be empty or any of the following:
    * order = (optional) Result order. Accepted values: `DESC` (default), ASC
    * page = (optional) Result page.
    * take = (optional) Number of results per request. Accepted values: 0 - 100. Default 10
    * @return {[JSON]}.
    */
    async listCheckouts(params = {}) {
        const fixedParams = dynamicParam(params);
        const url = '/checkout/?' + fixedParams;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            const data:any[] = response.data
            const checkoutObjects = data.map((item  => this.generateCheckoutObject(item)))
            return checkoutObjects
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function getCheckoutStatus
    * @description Get Customer.
    * @param {string} checkoutId - ID of checkout.
    * @return {JSON} status of checkout.
    */
    async getCheckoutStatus(checkoutId:string) {
        const url = '/checkout/status/' + checkoutId;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            const checkout = this.generateCheckoutStatusObject(response)
            return checkout
        } catch (error) {
            throw error
        }
    }

    /**
    * @function getCheckoutInfo
    * @description Get Customer.
    * @param {string} checkoutId - ID of checkout.
    * @return {JSON} info of checkout.
    */
    async getCheckoutInfo(checkoutId:string) {
        const url = '/checkout/info/' + checkoutId;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            const checkout = this.generateCheckoutObject(response)
            return checkout
        } catch (error) {
            throw error
        }
    }
}

export default HostedCheckout;