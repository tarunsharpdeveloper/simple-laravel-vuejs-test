import apiClient from '@/config/axios';
import vars from '@/services/path';

const getFlightLocations = payload =>
    apiClient.post(vars.flightLocationPath, payload);

const searchFlights = (payload, reqHeaders) =>
    apiClient.post('msfflights/searchFlights', payload, reqHeaders);

const getFilterFlights = (payload, reqHeaders) =>
    apiClient.post('msfflights/filterFlights', payload, reqHeaders);

const getFlightDetails = (payload, reqHeaders) =>
    apiClient.post('msfflights/getFlightDetail', payload, reqHeaders);
const getFlightBySearchId = (payload, reqHeaders) =>
    apiClient.post('msfflights/searchFlightsBySearchId', payload, reqHeaders);
export default {
    searchFlights,
    getFilterFlights,
    getFlightDetails,
    getFlightLocations,
    getFlightBySearchId
};
