import { Base, dynamicParam } from './base';

class HostedCheckout extends Base {
    /**
    * @function createCheckout
    * @description Create a checkout.
    * @param {JSON} data
    * data = {
            amount: 10,
            description: "description"
            customerEmail: "customer@gmail.com",
            notificationEmail: "CustomerfirstName",
            callbackUrl: "CustomerlastName",
            successUrl: "9xxxxxxxx",
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
            return response
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
            return response
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
            return response
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
            return response
        } catch (error) {
            throw error
        }
    }
}

export default HostedCheckout;