import fetch from 'node-fetch';
import xlsx from 'xlsx';

const baseUrl = "https://app.gtmhub.com/api/v1/users";
const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2d0bWh1Yi5jb20vYXBwX21ldGFkYXRhL2FjY291bnRJZCI6IjYxNDQ0YTEwZjdmZmUxMDAwMWY3NWI2NiIsImlhdCI6MTYzMTg2NTM2MSwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTUwNjc3Nzc1NzMzMTQxMDk5MjgifQ.0zZZS1ixt1srNU-XcEcUqoaJep0H64-YRInCCbUi6_8";
const accountId = "61444a10f7ffe10001f75b66";

const wb = xlsx.readFile('users.xlsx');
const ws = wb.Sheets['users'];
const data = xlsx.utils.sheet_to_json(ws);

let [obj1, obj2, obj3] = data;

const options1 = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "gtmhub-accountid": accountId,
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json, text/plain, */*",
    
  },
  body: JSON.stringify(obj1),
};

const options2 = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "gtmhub-accountid": accountId,
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json, text/plain, */*",
  },
  body: JSON.stringify(obj2),
};

const options3 = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "gtmhub-accountid": accountId,
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json, text/plain, */*",
  },
  body: JSON.stringify(obj3),
};

const createUser = (url, options) => {
  return options.map((option) => fetch(url, option));
};

(async () => {
  const promises = createUser(baseUrl, [options1, options2, options3]);

  try {
    const rc = await Promise.all(promises);
    console.log(rc);
  } catch (e) {
    console.log("Caught error: ", e);
  }
})();