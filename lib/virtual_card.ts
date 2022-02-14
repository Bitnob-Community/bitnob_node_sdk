import { Base, dynamicParam } from './base';

class VirtualCard extends Base {

        /**
    * @function registerCardUser
    * @description Regsiter Card User.
    * @param {JSON} data
    * data = {
            customerEmail: "customer@gmail.com",
            idNumber: "gauddksdop0ao",
            idType: "hahhahhajaja",
            firstName: "gsgsgsgsgsgs",
            lastName: "ggahagaga",
            city: "Lagos"
            state: "Lagos"
            country: "Nigeria",
            zipCode: "520231"
            line1: "2349021534385"
            amount: 1000
        }
    * @return {JSON} saved card data of customer.
    */
    async registerCardUser(data:any) {
        const requiredData = ["customerEmail", "idNumber", "idNumber", "firstName", "lastName", "city", "state", "country", "zipCode", "line1"]
        this.checkParameter(requiredData, data)

        const url = '/virtualcards/registercarduser';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function createCard
    * @description Create a card.
    * @param {JSON} data
    * data = {
            email: "customer@gmail.com"
        }
    * @return {JSON} card details.
    */
    async createCard(email:string) {

        const data = {
            email: "customer@gmail.com"
        }

        const url = '/virtualcards/create';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function topUp
    * @description Top Up Card.
    * @param {JSON} data
    * data = {
            customerEmail: "customer@gmail.com",
            cardId: "gauddksdop0aooaoa09886q",
            amount: 1000
        }
    * @return {JSON} saved data of customer.
    */
    async topUp(data:any) {
        const requiredData = ["customerEmail", "cardId", "amount"]
        this.checkParameter(requiredData, data)

        const url = '/virtualcards/credit';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function withdraw
    * @description Top Up Card.
    * @param {JSON} data
    * data = {
            customerEmail: "customer@gmail.com",
            cardId: "gauddksdop0aooaoa09886q",
            amount: 1000
        }
    * @return {JSON} saved data of customer.
    */
    async withdraw(data:any) {
        const requiredData = ["customerEmail", "cardId", "amount"]
        this.checkParameter(requiredData, data)

        const url = '/virtualcards/debit';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function freezeCard
    * @description freeze a card
    * @param {JSON} data
    * cardId: "gauddksdop0aooaoa09886qf"
    * @return {JSON} freeze card details.
    */
    async freezeCard(cardId:string) {

        const data = {
            cardId: "gauddksdop0aooaoa09886q",
        }

        const url = '/virtualcards/freeze';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function unfreezeCard
    * @description freeze a card
    * @param {JSON} data
    * cardId: "gauddksdop0aooaoa09886q",
    * @return {JSON} unfreeze card details.
    */
        async unfreezeCard(cardId:string) {

            const data = {
                cardId: "gauddksdop0aooaoa09886q",
            }
    
            const url = '/virtualcards/unfreeze';
            const method = 'post';
            try {
                const response = await this.sendRequest(url, method, data)
                return response
            } catch (error:any) {
                throw error
            }
        }

    /**
    * @function listCardUsers
    * @description.
    * @param {JSON} params can be empty or any of the following:
    * order = (optional) Result order. Accepted values: `DESC` (default), ASC
    * page = (optional) Result page.
    * take = (optional) Number of results per request. Accepted values: 0 - 100. Default 10
    * @return {[JSON]}.
    */
    async listCardUsers(params = {}) {
        const fixedParams = dynamicParam(params);
        const url = '/virtualcards/users/?' + fixedParams;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function listCardTransactions
    * @description
    * @param {JSON} params can be empty or any of the following:
    * order = (optional) Result order. Accepted values: `DESC` (default), ASC
    * page = (optional) Result page.
    * take = (optional) Number of results per request. Accepted values: 0 - 100. Default 10
    * @return {[JSON]}.
    */
     async listCardTransactions(cardId:string, params = {}) {
        const fixedParams = dynamicParam(params);
        const url = `/virtualcards/cards/${cardId}/transactions` + fixedParams;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function listTransactions
    * @description Create a customer.
    * @param {JSON} params can be empty or any of the following:
    * order = (optional) Result order. Accepted values: `DESC` (default), ASC
    * page = (optional) Result page.
    * take = (optional) Number of results per request. Accepted values: 0 - 100. Default 10
    * @return {[JSON]}.
    */
        async listTransactions(params = {}) {
        const fixedParams = dynamicParam(params);
        const url = '/virtualcards/transactions/?' + fixedParams;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function listCards
    * @description Create a customer.
    * @param {JSON} params can be empty or any of the following:
    * order = (optional) Result order. Accepted values: `DESC` (default), ASC
    * page = (optional) Result page.
    * take = (optional) Number of results per request. Accepted values: 0 - 100. Default 10
    * @return {[JSON]}.
    */
     async listCards(params = {}) {
        const fixedParams = dynamicParam(params);
        const url = '/virtualcards/cards/?' + fixedParams;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error:any) {
            throw error
        }
    }

    /**
    * @function fetchCard
    * @description Fetch Customer.
    * @param {string} cardId - ID of card.
    * @return {JSON} saved data of customer.
    */
    async fetchCard(cardId:string) {
        const url = '/virtualcards/card/' + cardId;
        const method = 'get';
        try {
            const response = await this.sendRequest(url, method)
            return response
        } catch (error) {
            throw error
        }
    }
}

export default VirtualCard;