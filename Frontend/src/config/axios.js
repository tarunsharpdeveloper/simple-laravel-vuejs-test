/*
    - axios centralized configurations
    - Each API Request logs/make:: Token Settings, Error Logs, Success Logs
*/
import axios from 'axios';
import localStorageService from './LocalStorageService';
import vars from '@/services/path';
import store from '../store.js';
import { evBus } from '@/services/bus.js';
const apiClient = axios.create({
    baseURL: vars.baseURL,
    // timeout: 20000, // indicates, 1000ms ie. 1 second
    headers: {
        Accept: 'application/json,text/plain, */*',
        'Content-Type': 'application/json'
    }
});

/*
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": "example-of-custom-header"
*/

// Includes Header Token In Every Call Beofre Requesting To Server/Domain

const authInterceptor = config => {
     
     if(config.headers.Authorization){
        config.headers['Authorization'] = config.headers.Authorization.includes('Bearer') !=true ? 'Bearer ' + config.headers.Authorization : config.headers.Authorization;
    }else{
    const authToken = store.getters.requestToken;
    if (authToken) config.headers['Authorization'] = 'Bearer ' + authToken;
    }

    return config;
};

apiClient.interceptors.request.use(authInterceptor);

const refreshToken = eConfigs => {
    const originalRequest = eConfigs;

    return axios
        .post('/auth/token', {
            refresh_token: localStorageService.getRefreshToken()
        })
        .then(res => {
            if (res.status === 201) {
                localStorageService.setToken(res.data);

                axios.defaults.headers.common[
                    'Authorization'
                ] = localStorageService.getAccessToken();

                return axios(originalRequest);
            }
        });
};

const errorInterceptor = error => {
    console.log(error.response)
    evBus.$emit('muteLoading');
    console.log(error.response)
    // check if it's a server error
    if (!error.response) {
        // notify.warn('Network/Server error');
        console.log('Network/Server error');
        return Promise.reject(error);
    }

    // all the error responses
    switch (error.response.status) {
        case 400:
            console.error(error.response.status, error.message);
            // notify.warn('Nothing to display','Data Not Found');
            break;

        case 401: // authentication error, logout the user
            // notify.warn( 'Please login again', 'Session Expired');
          
            store.dispatch('resetExpireItemSearchedDetails');
            store.dispatch('resetCustomerDetails');
            store.dispatch('reSetCarLocations');
            store.dispatch('reSetTrip');
            store.dispatch('resetCart');
            window.location.href = process.env.VUE_APP_LOG_OUT_URL;
            if(store.state.authStore.token==false){
              return false;
            }
            localStorage.removeItem('token');
            // refreshToken(error.config);
            // router.push('/auth');
            break;

        default:
            console.error('Server Error');
        //notify.error('Server Error');
    }

    return Promise.reject(error);
};

// Interceptor for responses
const responseInterceptor = response => {
   
    // https://trips-api.inteletravel.com/api/agent/me
   const urlParams = new URLSearchParams(window.location.search);
   const myParam = urlParams.get('token');
    if(myParam != null && myParam != ''){
        const hasKey = "data" in response.data;
        if(hasKey){
            evBus.$emit('muteLoading');
        }
    } else {
        evBus.$emit('muteLoading');
    }

    switch (response.status) {
        case 200:
            // console.log('Request Call Success', 'axios.js responseInterceptor: 100');
        break;
        case 401:
         console.log('yeeeeeeeeeeee');
        break;
        // any other cases
        default:
        // default case
    }

    return response;
};

// before a request is made start the nprogress
apiClient.interceptors.request.use(config => {
    evBus.$emit('activeLoading');

    return config;
});

apiClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default apiClient;
