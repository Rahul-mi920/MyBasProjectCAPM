namespace mock_data.db;
using { managed } from '@sap/cds/common';

entity Data : managed
{
    key ID : Integer;
    first_name : String(100);
    last_name : String(100);
    email : String(200);
    gender : String(100);
    ip_address : String(100);
}
