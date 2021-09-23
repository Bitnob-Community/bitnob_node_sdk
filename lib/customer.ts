import { Base, dynamicParam } from './base';

class Customer extends Base {
    /**
    * @function createCustomer
    * @description Create a customer.
    * @param {JSON} data
    * data = {
            email: "customer@gmail.com",
            firstName: "CustomerfirstName",
            lastName: "CustomerlastName",
            phone: "9xxxxxxxx",
            countryCode: "+234"
        }
    * @return {JSON} saved data of customer.
    */
    async createCustomer(data:any) {
        const requiredData = ["email", "firstName", "lastName", "phone", "countryCode"]
        this.checkParameter(requiredData, data)

        const url = '/customers';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function listCustomers
    * @description Create a customer.
    * @param {JSON} params can be empty or any of the following:
    * order = (optional) Result order. Accepted values: `DESC` (default), ASC
    * page = (optional) Result page.
    * take = (optional) Number of results per request. Accepted values: 0 - 100. Default 10
    * @return {[JSON]}.
    */
    async listCustomers(params = {}) {
        const fixedParams = dynamicParam(params);
        const url = '/customers/?' + fixedParams;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function getCustomer
    * @description Get Customer.
    * @param {string} customerId - ID of customer.
    * @return {JSON} saved data of customer.
    */
    async getCustomer(customerId:string) {
        const url = '/customers/' + customerId;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error) {
            throw error
        }
    }

    /**
    * @function getCustomerByEmail
    * @description Get Customer.
    * @param {string} customer_id - ID of customer.
    * @return {JSON} saved data of customer.
    */
     async getCustomerByEmail(email:string) {
        const data = {email: email}
        const url = "/customers/fetch_customer"
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error) {
            throw error
        }
    }

    /**
    * @function updateCustomer
    * @description Update a customer.
    * @param {JSON} data, customerId - data of customer, id of customer.
    * @return {JSON} updated data of customer.
    */
    async updateCustomer(customerId:string, data:any) {
        const url = '/customers/' + customerId;
        const method = 'put';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error) {
            throw error
        }
    }
}

export default Customer;