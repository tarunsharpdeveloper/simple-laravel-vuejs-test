import apiClient from '@/config/axios';
import vars from '@/services/path';

const getActivityLocation = payload =>
  apiClient.post(vars.activitiesLocationPath, payload);

const searchActivity = (payload, reqHeaders) =>
  apiClient.post('activity/searchActivity', payload, reqHeaders);

const getActivityDetail = (payload, reqHeaders) =>
  apiClient.post('activity/getActivityDetail', payload, reqHeaders);

const getActivityAvailability = (payload, reqHeaders) =>
  apiClient.post('activity/getActivityAvailability', payload, reqHeaders);

const getActivitypaymentPreferences = (payload, reqHeaders) =>
  apiClient.post('activity/getActivitypaymentPreferences', payload, reqHeaders);

const filterActivity = (payload, reqHeaders) =>
  apiClient.post('activity/filterActivity', payload, reqHeaders);

const getActivitiesBySearchId = (payload, reqHeaders) =>
  apiClient.post('activity/searchActivitiesBySearchId', payload, reqHeaders);

const getActivityReviews = (payload, reqHeaders) =>
  apiClient.post('activity/getActivityReviews', payload, reqHeaders);
export default {
  getActivityLocation,
  searchActivity,
  getActivityDetail,
  getActivityAvailability,
  getActivitypaymentPreferences,
  filterActivity,
  getActivitiesBySearchId,
  getActivityReviews
};
