/*
	- Trip Page Services
*/
import apiClient from '@/config/axios';
import vars from '@/services/path';

const END_POINT = vars.baseURL;

const sendPaymetMethod = (payload, reqHeaders) =>
    apiClient.post('trip/invite/sendPaymetMethod', payload, reqHeaders);

const getInviteToken = (payload) =>
    apiClient.post('trip/getInviteToken',payload);

const savePaymentmethod = (payload, reqHeaders) =>
    apiClient.post('trip/invite/savePaymentmethod',payload, reqHeaders);

const getPaymentMethodByTripId = (payload, reqHeaders) =>
    apiClient.post('trip/getPaymentMethodByTripId',payload, reqHeaders);

const getTripPaymentPreference = (payload, reqHeaders) => 
    apiClient.post('trip/getTripPaymentPreference', payload, reqHeaders);


export default {
    sendPaymetMethod,
    getInviteToken,
    savePaymentmethod,
    getPaymentMethodByTripId,
    getTripPaymentPreference
};
