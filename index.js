import fetch from 'node-fetch';
const baseUrl = "https://app.gtmhub.com/api/v1";
const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2d0bWh1Yi5jb20vYXBwX21ldGFkYXRhL2FjY291bnRJZCI6IjYxNDQ0YTEwZjdmZmUxMDAwMWY3NWI2NiIsImlhdCI6MTYzMTg2NTM2MSwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTUwNjc3Nzc1NzMzMTQxMDk5MjgifQ.0zZZS1ixt1srNU-XcEcUqoaJep0H64-YRInCCbUi6_8";
const accountId = "61444a10f7ffe10001f75b66";

const options = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "gtmhub-accountid": accountId,
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json, text/plain, */*",
  },
 

  body: JSON.stringify(
    {
      email: "jake_nordon@okrs.tech",
      firstName: "Jake",
      lastName: "Nordon",
    },
  ),
};


const createUser = (url, settings) => {
  return fetch(`${url}/users`, settings)
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error.message);
    });
};

createUser(baseUrl, options);
