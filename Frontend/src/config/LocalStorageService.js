const LocalStorageService = (function() {
    var _service;

    function _getService() {
        if (!_service) {
            _service = this;
            return _service;
        }

        return _service;
    } // Ends func

    function _setToken(tokenObj) {
        localStorage.setItem('access_token', tokenObj.access_token);
        localStorage.setItem('refresh_token', tokenObj.refresh_token);
    } // Ends func
    
  function _setAppDomain(domain) {
        localStorage.setItem('app_domain', domain);
    } //Ends func
    
    function _getAccessToken() {
        return localStorage.getItem('access_token');
    } // Ends func

    function _getRefreshToken() {
        return localStorage.getItem('refresh_token');
    } // Ends func

    function _clearToken() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    } // Ends func
   
  function _getAppDomain() {
       return localStorage.getItem('app_domain');
   }
   function _removeItem(item) {
    return localStorage.removeItem(item);
   }
    var respond = {
        getService: _getService,
        setToken: _setToken,
        getAccessToken: _getAccessToken,
        getRefreshToken: _getRefreshToken,
        clearToken: _clearToken,
        setAppDomain: _setAppDomain,
        getAppDomain: _getAppDomain,
        removeItem:_removeItem
    };

    return respond;
})();

export default LocalStorageService;
