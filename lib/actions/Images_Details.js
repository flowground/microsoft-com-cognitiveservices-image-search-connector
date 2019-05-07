/**
 * Auto-generated action file for "Image Search Client" API.
 *
 * Generated at: 2019-05-07T14:43:01.476Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / microsoft-com-cognitiveservices-image-search-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Images_Details'
 * Endpoint Path: '/images/details'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "X-BingApis-SDK",
    "Accept",
    "Accept-Language",
    "Content-Type",
    "User-Agent",
    "X-MSEdge-ClientID",
    "X-MSEdge-ClientIP",
    "X-Search-Location",
    "cab",
    "cal",
    "car",
    "cat",
    "ct",
    "cc",
    "id",
    "imgUrl",
    "insightsToken",
    "modules",
    "mkt",
    "q",
    "safeSearch",
    "setLang"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "X_BingApis_SDK": "X-BingApis-SDK",
    "Accept": "Accept",
    "Accept_Language": "Accept-Language",
    "Content_Type": "Content-Type",
    "User_Agent": "User-Agent",
    "X_MSEdge_ClientID": "X-MSEdge-ClientID",
    "X_MSEdge_ClientIP": "X-MSEdge-ClientIP",
    "X_Search_Location": "X-Search-Location",
    "cab": "cab",
    "cal": "cal",
    "car": "car",
    "cat": "cat",
    "ct": "ct",
    "cc": "cc",
    "id": "id",
    "imgUrl": "imgUrl",
    "insightsToken": "insightsToken",
    "modules": "modules",
    "mkt": "mkt",
    "q": "q",
    "safeSearch": "safeSearch",
    "setLang": "setLang"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['apiKeyHeader'] = cfg['apiKeyHeader'];

    let callParams = {
        spec: spec,
        operationId: 'Images_Details',
        pathName: '/images/details',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}