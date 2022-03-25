/*
	- Cars Page Services
*/
import apiClient from '@/config/axios';
import vars from '@/services/path';

const getVillasLocations = payload =>
    apiClient.post(vars.villasLocationPath, payload);

const searchVillas = (payload, reqHeaders) =>
    apiClient.post('villas/search', payload, reqHeaders);

const getFilterVilla = (payload, reqHeaders) =>
    apiClient.post('villas/filter', payload, reqHeaders);

const getVillasBySearchId = (payload, reqHeaders) =>
    apiClient.post('villas/searchBySearchId', payload, reqHeaders);

const getVillaDetails = (payload, reqHeaders) =>
    apiClient.post('villas/getVillaDetails', payload, reqHeaders);

const getVillaReviews = (payload, reqHeaders) =>
    apiClient.post('villas/getVillaReviews', payload, reqHeaders);

const getVillaPaymentPreferences = (payload, reqHeaders) =>
    apiClient.post('villas/getPaymentTypes', payload, reqHeaders);

const getVillaCheckAvailability = (payload, reqHeaders) =>
    apiClient.post('villas/getVillaAvailability', payload, reqHeaders);

export default {
    getVillasLocations,
    searchVillas,
    getFilterVilla,
    getVillaDetails,
    getVillasBySearchId,
    getVillaReviews,
    getVillaPaymentPreferences,
    getVillaCheckAvailability
};
