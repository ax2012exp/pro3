namespace HR.db;
using { managed } from '@sap/cds/common';


entity EMP:managed
{
    key ID : Integer;
    name : String(150) not null;
    job : String(100);
    address : String(200);
}
