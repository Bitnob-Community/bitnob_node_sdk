import { Base } from './base';

class Lnaddress extends Base {
       /**
    * @function createLnurl
    * @description Create a lightning URL and address.
    * @param {JSON} data
    * data = {
            description: "xxxxxxxxx",
            tokens: 1000,
            private: false,
            is_including_private_channels: false,
            is_fallback_included: true,
            customerEmail: "customer@gmail.com"
        }

        required_data = identifier, tld, customerEmail
    * @return {JSON} Create new lnurl and lightning address.
    */


      async createLnurl(data:any){
          const requiredData = ["identifier", "tld", "customerEmail"]
          this.checkParameter(requiredData, data)
          const url = '/lnurl';
          const method = 'post';
          try {
            const response = await this.sendRequest(url, method, data)
            return response 
        } catch (error) {
            throw error
        }

      }  

         /**
    * @function decodeLnurl
    * @description Decode an lnurl.
    * @param {JSON} data
    * data = {
            description: "xxxxxxxxx",
            tokens: 1000,
            private: false,
            is_including_private_channels: false,
            is_fallback_included: true,
            customerEmail: "customer@gmail.com"
        }

        required_data = encodedurl
    * @return {JSON} Create new lnurl and lightning address.
    */

        async decodeLnurl(data:any) {
            const requiredData = ["encodedurl"]
            this.checkParameter(requiredData, data)
            const url = '/lnurl/decodelnurl';
            const method = 'post';
            try {
                const response = await this.sendRequest(url, method, data)
                return response
            } catch (error) {
                throw error   
            }
        }

                 /**
    * @function payLnurl
    * @description Pay another service using lnurl
    * @param {JSON} data
    * data = {
            description: "xxxxxxxxx",
            tokens: 1000,
            private: false,
            is_including_private_channels: false,
            is_fallback_included: true,
            customerEmail: "customer@gmail.com"
        }

        required_data = encodedlnurl, satoshis, reference, customerEmail
    * @return {JSON} Pay another service using lnurl.
    */

        async payLnurl(data:any) {
            const requiredData = ["encodedLnUrl", "satoshis", "reference", "customerEmail"]
            this.checkParameter(requiredData, data)
            const url = '/lnurl/paylnurl';
            const method = 'post';
            try {
                const response = await this.sendRequest(url, method, data)
                return response
            } catch (error) {
                throw error   
            }
        }

                     /**
    * @function createLnWithdrawal
    * @description  Create an ln-withdrawal
    * @param {JSON} data
    * data = {
            description: "xxxxxxxxx",
            tokens: 1000,
            private: false,
            is_including_private_channels: false,
            is_fallback_included: true,
            customerEmail: "customer@gmail.com"
        }

        required_data = description, satoshis, customerEmail
    * @return {JSON} Create an ln-withdrawal

.
    */

        async createLnWithdrawal(data:any) {
            const requiredData = ["encodedLnUrl", "satoshis", "reference", "customerEmail"]
            this.checkParameter(requiredData, data)
            const url = '/ln/lnurl/createLnUrlWithdrawal';
            const method = 'post';
            try {
                const response = await this.sendRequest(url, method, data)
                return response
            } catch (error) {
                throw error   
            }
        }

         /**
    * @function decodeLnAddress
    * @description decoding a lightning address

    * @param {JSON} data
    * data = {
            description: "xxxxxxxxx",
            tokens: 1000,
            private: false,
            is_including_private_channels: false,
            is_fallback_included: true,
            customerEmail: "customer@gmail.com"
        }

        required_data = description, satoshis, customerEmail
    * @return {JSON} decoding a lightning address

.
    */

async decodeLnAddress(data:any) {
    const requiredData = ["encodedLnUrl", "satoshis", "reference", "customerEmail"]
    this.checkParameter(requiredData, data)
    const url = '/lnurl/decodelnaddress';
    const method = 'post';
    try {
        const response = await this.sendRequest(url, method, data)
        return response
    } catch (error) {
        throw error   
    }
    }

     /**
    * @function payLnAddress
    * @description Pay a lightning address

    * @param {JSON} data
    * data = {
            description: "xxxxxxxxx",
            tokens: 1000,
            private: false,
            is_including_private_channels: false,
            is_fallback_included: true,
            customerEmail: "customer@gmail.com"
        }

        required_data = lnaddress, description, satoshis, customerEmail
    * @return {JSON} Pay a lightning address
    */

async payLnAddress(data:any) {
    const requiredData = ["lnaddress", "satoshis", "reference", "customerEmail"]
    this.checkParameter(requiredData, data)
    const url = '/lnurl/paylnaddress';
    const method = 'post';
    try {
        const response = await this.sendRequest(url, method, data)
        return response
    } catch (error) {
        throw error   
    }
}

/**
    * @function listLnUrl
    * @description Get all lnurls in your account

    * @param {JSON} data
    * data = {
            description: "xxxxxxxxx",
            tokens: 1000,
            private: false,
            is_including_private_channels: false,
            is_fallback_included: true,
            customerEmail: "customer@gmail.com"
        }

        required_data = lnaddress, description, satoshis, customerEmail
    * @return {JSON} Get all lnurls in your account
    */

        async listLnUrl(data:any) {
            const requiredData = [""]
            this.checkParameter(requiredData, data)
            const url = '/ln/lnurl/';
            const method = 'get';
            try {
                const response = await this.sendRequest(url, method, data)
                return response
            } catch (error) {
                throw error   
            }
        }


        /**
    * @function getLnUrlByIdentifier
    * @description Get lnurl by identifier

    * @param {string} username
    * @return {JSON} Get lnurl by identifier.
    */

        async getLnUrlByIdentifier(username:string) {
            const data = {username:username}
            const url = '/lnurl/fetchlnurl/{username}';
            const method = 'get';
            try {
                const response = await this.sendRequest(url, method, data)
                return response
            } catch (error) {
                throw error   
            }
        }

         /**
    * @function getLnUrl
    * @description get lnurl by id

    * @param {string} id
    * @return {JSON} get lnurl by id
    */

          async getLnUrl(id:string) {
            const data = {id:id}
            const requiredData = ["id"]
            this.checkParameter(requiredData, data)
            const url = '/lnurl/{id}';
            const method = 'get';
            try {
                const response = await this.sendRequest(url, method, data)
                return response
            } catch (error) {
                throw error   
            }
        }

         /**
    * @function updateLnUrl
    * @description Update lnurl

    * @param {string} data
    * @return {JSON} Update lnurl
    */
          async updateUrl(customerId:string, data:any) {
            const requiredData = ["id"]
            this.checkParameter(requiredData, data)
            const url = '/lnurl/{id}';
            const method = 'put';
            try {
                const response = await this.sendRequest(url, method, data)
                return response
            } catch (error) {
                throw error   
            }
        }
    }