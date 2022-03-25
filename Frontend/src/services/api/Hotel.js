/*
	- Cars Page Services
*/
import apiClient from '@/config/axios';
import vars from '@/services/path';
const getHotelLocations = payload =>
    apiClient.post(vars.hotelLocationPath, payload);

const searchHotels = (payload, reqHeaders) =>
    apiClient.post('hotels/searchHotels', payload, reqHeaders);

const getFilterHotel = (payload, reqHeaders) =>
    apiClient.post('hotels/filterHotels', payload, reqHeaders);

const getHotelBySearchId = (payload, reqHeaders) =>
    apiClient.post('hotels/searchHotelBySearchId', payload, reqHeaders);

const getHotelDetail = (payload, reqHeaders) =>
    apiClient.post('hotels/getHotelDetail', payload, reqHeaders);

const getHotelPaymentPreferences = (payload, reqHeaders) =>
    apiClient.post('hotels/getHotelPaymentPreference', payload, reqHeaders);

const checkAvailability = (payload, reqHeaders) =>
    apiClient.post('hotels/getAvailability', payload, reqHeaders);

export default {
    getHotelLocations,
    searchHotels,
    getFilterHotel,
    getHotelBySearchId,
    getHotelDetail,
    getHotelPaymentPreferences,
    checkAvailability
};
