using { mock_data } from '../db/mock_data';

@path: '/sap/opu/odata/sap/API_mock_data'
service MyService {

    entity Dataset as projection on mock_data.db.Data;


}