/*
    - User/Auth Related Services
*/

import apiClient from '@/config/axios';

export default {
    auth: {
        userLogin(payload) {
            return apiClient.post('/user/login', payload); // agent/login
        },
        userAliveAndActive() {
            return apiClient.get('/agent/me');
        },
        userLogout() {
            return apiClient.post('/auth/logout/');
        },
        generateResetToken(payload) {
            return apiClient.post('/auth/generate_reset_token/', payload);
        },
        resetPassword(payload) {
            return apiClient.post('/user/changePassword', payload);
        },
        forgetPassword(payload) {
            return apiClient.post('/user/forgotPassword', payload);
        },
        getAgentDetail(payload) {
            return apiClient.post('/agent/getAgentDetail', payload);
        }
    }
};
