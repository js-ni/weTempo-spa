const baseHost = "http://localhost:7000";
const baseApi = "/api";
const rest = "/rest";
const v1 = "/v1.0.0";
const baseRestUrl = `${baseHost}${baseApi}${rest}${v1}`;
const citiesUrl = `${baseRestUrl}/cities`;
const observationsUrl = `${baseRestUrl}/observations`;

export const citiesEnd = {
  all: `${citiesUrl}`,
  add: `${citiesUrl}`
};

export const observationsEnd = {
  all: `${observationsUrl}`,
  add: `${observationsUrl}`
};
