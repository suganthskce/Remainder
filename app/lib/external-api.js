// const axios = require("axios");
// const { isEmpty } = require("lodash");
// const ApiConfig = require("./../../config/apiConfig");
// const config = require('./../../config/configuration');
// const { logger } = require('../ease/logger');
// /**
//  * It will build the Req data for the external API according to GET and POST method
//  * @params Options
//  * @return JSON
//  */
// const _buildReqData = options => {
//     const { content = {}, api = "", headers = "", urlAppend = "" } = options;
//     const apiDetail = ApiConfig[api];
//     const ServerConfig = config.get(`ServerConfig`);
//     const envProtocol = config.get("envProtocol");
//     const envDomain = config.get("envDomain");
//     const { server = "ums_srv", url, method } = apiDetail;
//     const { protocol, server: apiServer } = ServerConfig[server];
//     const baseUrl = `${envProtocol || protocol}://${envDomain || apiServer}`;
//     const apiUrl = `${baseUrl}${url}${urlAppend}`;
//     let postData = {};
//     if (method == "POST") {
//         postData = setPostData(content);
//     }
//     return {
//         url: apiUrl,
//         method,
//         headers,
//         ...postData
//     };
// };

// /**
//  * It will set the POST data for the request
//  * @param content
//  * @return JSON
//  */
// const setPostData = (content) => {
//     return {
//         data: content
//     };
// };

// /**
//  * This function will sanitize the response before sending it to client. Also it will handle the error scenarios
//  * @return JSON
//  */
// const sanitizeResponse = (response, request, url) => {
//     try {
//         const { data = {}, headers = "" } = response;
//         const { authorization = "" } = headers;

//         if (request.headers && !isEmpty(authorization)) {
//             request.newAuthorizationToken = authorization;
//         }
//         const { status = {}, errors } = data;
//         const { success = false } = status;
//         if (success) {
//             if (typeof data !== "object" || isEmpty(data)) {
//                 //Log Error
//             }
//             logger.info(`SanitizeResponse  with success data [${url}] : ${JSON.stringify(data)}`);
//             return data;
//         } else {
//             let errorData = {};
//             if (typeof data !== "object" || isEmpty(data)) {
//                 let customError = [{ message: data }];
//                 errorData.error = true;
//                 errorData.errors = customError;
//                 errorData.status = { "success": false }
//                 return errorData;
//             }
//             errorData = Object.assign({}, data);
//             errorData.error = true;
//             errorData.status = { "success": false }
//             return errorData;
//             //handle false condition like 403, 400, 500, 502
//         }
//     } catch (e) {
//         let errorData = {};
//         let customError = [{ errCode: 502, message: `Server is down! ${e}` }];
//         logger.error(`ExternalApiRequest Response With Error [${url}]:  Server is down! ${e}`);
//         errorData.error = true;
//         errorData.errors = customError;
//         errorData.status = { "success": false }
//         return errorData;
//     }
// };

// const ExternalApiRequest = (options, request = {}) => {
//     const reqData = _buildReqData(options);
//     logger.info('ExternalApiRequest Called: ' + JSON.stringify(reqData));
//     return axios(reqData)
//         .then(responseData => {
//             return sanitizeResponse(responseData, request, reqData.url);
//         })
//         .catch(err => {
//             return sanitizeResponse(err.response, request, reqData.url);
//         });
// };

// module.exports = ExternalApiRequest;
