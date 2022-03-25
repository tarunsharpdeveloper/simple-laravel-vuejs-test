/*
	- Flights Page Services
*/
import apiClient from '@/config/axios';

const signup = (payload, reqHeaders) =>
    apiClient.post('customer/signUp', payload, reqHeaders);

const savePayment = (payload, reqHeaders) =>
    apiClient.post('customer/savePayment', payload, reqHeaders);

export default {
    signup,
    savePayment
};
