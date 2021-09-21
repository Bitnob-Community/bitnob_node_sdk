const { Base, dynamicParam } = require('./base')

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
    async createCustomer(data) {
        const url = '/customers';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error) {
            return error.message
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
        const response = await this.sendRequest(url, method)
        return response
    }

    /**
    * @function getCustomer
    * @description Get Customer.
    * @param {string} customer_id - ID of customer.
    * @return {JSON} saved data of customer.
    */
    async getCustomer(customer_id) {
        const url = '/customers/' + customer_id;
        const method = 'get';
        const response = await this.sendRequest(url, method)
        return response
    }

    /**
    * @function updateCustomer
    * @description Update a customer.
    * @param {JSON} data - data of customer.
    * @return {JSON} updated data of customer.
    */
    async updateCustomer(customer_id, data) {
        const url = '/customers/' + customer_id;
        const method = 'put';
        const response = await this.sendRequest(url, method, data)
        return response
    }
}

module.exports = {
    Customer,
}