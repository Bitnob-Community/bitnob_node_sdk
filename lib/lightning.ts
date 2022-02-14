import { Base } from './base';

class Lightning extends Base {

    /**
    * @function createInvoice
    * @description Create a lightning invoice.
    * @param {JSON} data
    * data = {
            description: "xxxxxxxxx",
            tokens: 1000,
            private: false,
            is_including_private_channels: false,
            is_fallback_included: true,
            customerEmail: "customer@gmail.com"
        }

        required_data = description, tokens, customerEmail
    * @return {JSON} lightning invoice for customer.
    */
    async createInvoice(data:any) {
        const requiredData = ["description", "tokens", "customerEmail"]
        this.checkParameter(requiredData, data)
        const url = '/wallets/ln/createinvoice';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response 
        } catch (error) {
            throw error
        }
    }

    /**
    * @function payInvoice
    * @description Paying a Lighting invoice.
    * @param {JSON} data
    * data = {
            request: "lntb10u1ps3z4vqpp5lhvr5hdhtw2z32f88dfym5hw2pk9a0a2gr5g0x85ccdy3hpwuneqdpsd4hkueteypehgmmswvsxummwwdjkuum9yphkugrnw4hxgctecqzpgxqr23sfppqtthagr80s0jruguvg38g78pgl8nwp32esp5wvx8sus7a4g66ujtw2zzvyj49zd2sfw5msh3jhaes2vm3z6ga84s9qyyssqm73qauemzqw3tz0equ7cfs2l8xfcgqzuusgg6rplp4hprv83cde97fhh5vxglsqfzwzpms24d7xrqc77cjv32tny82nktfhkz699awcqwdhwur",
            reference: "reference"
        }

        required_data = request, reference
    * @return {JSON} lightning invoice for customer.
    */
    async payInvoice(data:any) {
        const requiredData = ["request", "reference"]
        this.checkParameter(requiredData, data)
        const url = '/wallets/ln/pay';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error) {
            throw error   
        }
    }

    /**
    * @function initiatePayment
    * @description Initiate payment on lighting network.
    * @param {string} invoiceRequest 
    * invoiceRequest = "lntb10u1psny337pp5km35drx473py8ucup33k0qhrql0ll7cg528c9999eyssp8l0l7xsdpsd4hkueteypehgmmswvsxummwwdjkuum9yphkugrnw4hxgctecqzpgxqr23sfppq00dkh7zckw5d7xgzkk0tctcamlzu6fnrsp53d3kuz79s7akxj9hx0ucnd5fzpd5dlsmwxu7dcja0ksqguqkkm7q9qyyssqyr0lgw260u7pqyjfuwp4azszhugt9m353c9vfq36qltxnqe40qm3dxz4vrqxjyp0utyhvr3p3rrvjpuc0jfts3yd0y02ckqhnx9zp8gpzrazdt"
    * @return {JSON} lightning invoice for customer.
    */
    async initiatePayment(invoiceRequest:string) {
        const data = {request: invoiceRequest}
        const url = '/wallets/ln/initiatepayment';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error) {
            throw error   
        }
    }

    /**
    *  Get Lightning Invoice.
    *
    * @function getInvoice
    * @description Get lighting invoice.
    * @param {string} invoiceId 
    * invoiceId = "1b7605e0cdfe8b0267fe377f5ecb7d068375b551e4a626880e668e1aec23bf64"
    * @return {JSON} lightning invoice.
    */
    async getInvoice(invoiceId:string) {
        const data = {"id" : invoiceId}
        const url = '/wallets/ln/getinvoice';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error) {
            throw error
        }
    }

    /**
    * @function decodePaymentRequest
    * @description Decode Payment Request.
    * @param {string} invoiceRequest
    * invoiceRequest = "lntb10u1psny337pp5km35drx473py8ucup33k0qhrql0ll7cg528c9999eyssp8l0l7xsdpsd4hkueteypehgmmswvsxummwwdjkuum9yphkugrnw4hxgctecqzpgxqr23sfppq00dkh7zckw5d7xgzkk0tctcamlzu6fnrsp53d3kuz79s7akxj9hx0ucnd5fzpd5dlsmwxu7dcja0ksqguqkkm7q9qyyssqyr0lgw260u7pqyjfuwp4azszhugt9m353c9vfq36qltxnqe40qm3dxz4vrqxjyp0utyhvr3p3rrvjpuc0jfts3yd0y02ckqhnx9zp8gpzrazdt"
    * @return {JSON} invoice information.
    */
    async decodePaymentRequest(invoiceRequest:string) {
        const data = {request: invoiceRequest}
        const url = '/wallets/ln/decodepaymentrequest';
        const method = 'post';
        try {
            const response = await this.sendRequest(url, method, data)
            return response
        } catch (error) {
            throw error
        }
    }
}

export default Lightning;