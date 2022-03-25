/*
	- Cars Page Services
*/
import apiClient from '@/config/axios';
import vars from '@/services/path';

const getAllCars = () => apiClient.get();

const getCar = car_id => apiClient.get('', { car_id });

const getAllList = (reqHeaders) =>
    apiClient.get('getList', reqHeaders);

const createList = (payload ,reqHeaders) => 
    apiClient.post('createList', payload, reqHeaders);


const deleteList = (payload, reqHeaders) =>
    apiClient.post('deleteList', payload, reqHeaders);

const createCard = (payload, reqHeaders) => 
    apiClient.post('createCard', payload, reqHeaders);
    
export default {
    getAllList,
    getCar,
    createList,
    deleteList,
    createCard
  
};
