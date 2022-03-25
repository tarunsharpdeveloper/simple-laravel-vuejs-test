/*
	- Trip Page Services
*/
import apiClient from '@/config/axios';
import vars from '@/services/path';

const END_POINT = vars.baseURL;

const createTrip = (payload, reqHeaders) =>
    apiClient.post('trip/createTrip', payload, reqHeaders);

const updateTrip = (payload, reqHeaders) =>
    apiClient.post('trip/updateTrip', payload, reqHeaders);

const searchTrip = (payload, reqHeaders) =>
    apiClient.post('trip/searchTrip', payload, reqHeaders);

const removeTravellerOfTrip = (payload, reqHeaders) =>
    apiClient.post('trip/removeTravellerFromTipMeta', payload, reqHeaders);

const addTripData = (payload, reqHeaders) =>
    apiClient.post('trip/addTripData', payload, reqHeaders);

const checkoutTrip = (payload, reqHeaders) =>
    apiClient.post('trip/checkout', payload, reqHeaders);

const deleteTripData = (payload, reqHeaders) =>
    apiClient.post('trip/deleteTripData', payload, reqHeaders);

const deleteTrip = (payload, reqHeaders) =>
    apiClient.post('trip/deleteTrip', payload, reqHeaders);
const getSessionClock = (payload, reqHeaders) =>
    apiClient.post('trip/getSessionClock', payload, reqHeaders);     

const getUserTrip = (reqHeaders) => 
    apiClient.post('user/getUserTrip',{}, reqHeaders);

const getQuoteOfTrip = (payload, reqHeaders) => 
    apiClient.post('trip/quotation', payload, reqHeaders);

const getQuoteOfTripLink = (payload, reqHeaders) => 
    apiClient.post('trip/generateTripQuotationHash', payload, reqHeaders);

    

export default {
    createTrip,
    updateTrip,
    searchTrip,
    removeTravellerOfTrip,
    addTripData,
    checkoutTrip,
    deleteTripData,
    deleteTrip,
    getSessionClock,
    getUserTrip,
    getQuoteOfTrip,
    getQuoteOfTripLink
};
