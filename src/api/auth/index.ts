import { api } from "api";

const headers = {
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp'
  }
}

const LOGIN = 'sergei.stralenia@gmail.com';
const PASSWORD = 'paralect123';
const CLIENT_ID = '2356';
const CLIENT_SECRET = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';

export const auth = async () => {
    const {data} = await api.get(
      `/oauth2/password/?login=${LOGIN}&password=${PASSWORD}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      headers
    )
    return data;
}

