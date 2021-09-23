import fetch from 'node-fetch';
import xlsx from 'xlsx';

const baseUrl = "https://app.gtmhub.com/api/v1/tasks";
const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2d0bWh1Yi5jb20vYXBwX21ldGFkYXRhL2FjY291bnRJZCI6IjYxNDQ0YTEwZjdmZmUxMDAwMWY3NWI2NiIsImlhdCI6MTYzMTg2NTM2MSwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTUwNjc3Nzc1NzMzMTQxMDk5MjgifQ.0zZZS1ixt1srNU-XcEcUqoaJep0H64-YRInCCbUi6_8";
const accountId = "61444a10f7ffe10001f75b66";

const tasksWb = xlsx.readFile('Users_OKRs_Data.xlsx');
const tasksWs = tasksWb.Sheets['Tasks'];
const tasks = xlsx.utils.sheet_to_json(tasksWs);

let [firstOwner, secondOwner, thirdOwner, fourthOwner, fifthOwner, sixthOwner, seventhOwner] = tasks;


const firstOwnerOptions = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "gtmhub-accountid": accountId,
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json, text/plain, */*",
    
  },
  body: JSON.stringify(firstOwner),
};

const secondOwnerOptions = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "gtmhub-accountid": accountId,
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json, text/plain, */*",
  },
  body: JSON.stringify(secondOwner),
};

const thirdOwnerOptions = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "gtmhub-accountid": accountId,
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json, text/plain, */*",
  },
  body: JSON.stringify(thirdOwner),
};

const fourthdOwnerOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "gtmhub-accountid": accountId,
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json, text/plain, */*",
    },
    body: JSON.stringify(fourthOwner),
  };

  const fifthdOwnerOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "gtmhub-accountid": accountId,
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json, text/plain, */*",
    },
    body: JSON.stringify(fifthOwner),
  };


  const sixthdOwnerOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "gtmhub-accountid": accountId,
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json, text/plain, */*",
    },
    body: JSON.stringify(sixthOwner),
  };

  const seventhOwnerOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "gtmhub-accountid": accountId,
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json, text/plain, */*",
    },
    body: JSON.stringify(seventhOwner),
  };



const createTask = (url, options) => {
  return options.map((option) => fetch(url, option));
};

(async () => {
  const promises = createTask(baseUrl, [firstOwnerOptions, secondOwnerOptions, thirdOwnerOptions, fourthdOwnerOptions, fifthdOwnerOptions, sixthdOwnerOptions, seventhOwnerOptions]);

  try {
    const rc = await Promise.all(promises);
    console.log(rc);
  } catch (e) {
    console.log("Caught error: ", e);
  }
})();

