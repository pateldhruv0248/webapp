import * as healthZService from '../services/healthz-service.js';
import { sendResponse } from '../utils/response.js';

export const get = async (req, res) => {
    try {
        const { status } = await healthZService.getConnection();
        if (status === 200) {
            console.log('healtz-controller status success: ', status)
            sendResponse({ req, res, status })
        } else {
            console.log('healtz-controller status code returned: ', status)
            sendResponse({ req, res, status: 503})
        }
    } catch (error) {
        sendResponse({req, res, status: 400, err: error})
    }
    
}