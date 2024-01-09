import * as express from "express";
// import { produceIngestion } from "../../utils";
// import FormData from 'form-data';
import config from "../../config/index";
// import * as XLSX from 'xlsx';
import { logger } from "../../utils/logger";


import {
    getSheetData, searchMDMS
} from "../../api/index";

import {
    convertObjectForMeasurment,
    errorResponder,
    sendResponse,
} from "../../utils/index";
// import { httpRequest } from "../../utils/request";

// Define the MeasurementController class
class TransformController {
    // Define class properties
    public path = "/bulk";
    public router = express.Router();
    public dayInMilliSecond = 86400000;

    // Constructor to initialize routes
    constructor() {
        this.intializeRoutes();
    }

    // Initialize routes for MeasurementController
    public intializeRoutes() {
        this.router.post(`${this.path}/_transform`, this.getTransformedData);
        this.router.post(`${this.path}/_process`, this.processMicroplan);
    }
    getTransformedData = async (
        request: express.Request,
        response: express.Response
    ) => {
        try {
            const { fileStoreId, transformTemplate, selectedRows } = request?.body?.HCMConfig;
            logger.info("TransformTemplate :" + transformTemplate)
            const result: any = await searchMDMS([transformTemplate], "HCM.TransformTemplate", request.body.RequestInfo, response);
            var TransformConfig: any;
            if (result?.mdms?.length > 0) {
                TransformConfig = result.mdms[0];
                logger.info("TransformConfig : " + JSON.stringify(TransformConfig))
            }
            else {
                logger.info("No Transform Template found");
                return errorResponder({ message: "No Transform Template found " }, request, response);
            }
            logger.info("Transform Config : ", TransformConfig);
            const url = config.host.filestore + config.paths.filestore + `/url?tenantId=${request?.body?.RequestInfo?.userInfo?.tenantId}&fileStoreIds=${fileStoreId}`;
            logger.info("File fetching url : " + url)
            const updatedDatas: any = await getSheetData(url, selectedRows, TransformConfig?.data?.Fields, TransformConfig?.data?.sheetName);
            logger.info("Updated Datas : " + JSON.stringify(updatedDatas))
            // After processing all mdms elements, send the response
            return sendResponse(response, { updatedDatas }, request);
        }
        catch (e: any) {
            return errorResponder({ message: e?.response?.data?.Errors[0].message }, request, response);
        }
    };


    processMicroplan = async (
        request: express.Request,
        response: express.Response
    ) => {
        try {
            var updatedDatas: any = [];
            const { data, parsingTemplate } = request?.body?.HCMConfig;
            const parsingResults: any = await searchMDMS([parsingTemplate], "HCM.ParsingTemplate", request.body.RequestInfo, response);
            for (const parsingResult of parsingResults?.mdms) {
                const parsingConfig = parsingResult?.data?.path;
                logger.info("Parsing Config : " + JSON.stringify(parsingConfig))

                // Check if data is an array before using map
                if (Array.isArray(data)) {
                    const updatedData = data.map((element) =>
                        convertObjectForMeasurment(element, parsingConfig)
                    );

                    // Add updatedData to the array
                    updatedDatas.push(updatedData);
                }
            }
            logger.info("Updated Datas : " + JSON.stringify(updatedDatas))
            // After processing all mdms elements, send the response
            return sendResponse(response, { updatedDatas }, request);
        }
        catch (e: any) {
            logger.error("Error : " + JSON.stringify(e))
            return errorResponder({ message: e?.response?.data?.Errors[0].message }, request, response);
        }
    };


}

// Export the MeasurementController class
export default TransformController;
