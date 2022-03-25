/*
	- Trip Page Services
*/
import apiClient from '@/config/axios';
import vars from '@/services/path';

const END_POINT = vars.baseURL;

const addTraveller = (payload, reqHeaders) =>
    apiClient.post('traveller/saveTraveller', payload, reqHeaders);

const updateTraveller = (payload, reqHeaders) =>
    apiClient.post('traveller/update', payload, reqHeaders);

const updateSpecTraveller = (payload, reqHeaders) =>
    apiClient.post('traveller/updateSpecificTraveller', payload, reqHeaders);

// trip/removeTravellerFromTipMeta

const deleteTraveller = (payload, reqHeaders) =>
    apiClient.post('traveller/delete', payload, reqHeaders);

const inviteTraveller = (payload, reqHeaders) =>
    apiClient.post('trip/inviteTraveller', payload, reqHeaders);

const searchTraveller = (payload, reqHeaders) =>
    apiClient.post('traveller/searchTraveller', payload, reqHeaders);

const getTravellersOfAgent = (payload, reqHeaders) =>
    apiClient.post('traveller/getTravellersOfAgent', payload, reqHeaders);

const saveInvitedTraveller = (payload, reqHeaders) =>
    apiClient.post('traveller/saveInvitedTraveller', payload, reqHeaders);

export default {
    addTraveller,
    updateTraveller,
    updateSpecTraveller,
    deleteTraveller,
    inviteTraveller,
    searchTraveller,
    getTravellersOfAgent,
    saveInvitedTraveller
};
