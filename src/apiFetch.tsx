import axios, {  } from 'axios';


export default async function apiFetch({ url = '', method, params = {} }: any) {

  const headers: any = {
    'Content-Type': 'application/json',
  };

  let token =  localStorage.getItem('id');
  if (token) {
    headers.authorization = token;
  }

  const authAxios = axios.create({
    baseURL: 'http://localhost:4080/v1/app',
    headers: headers,
  });


  try {
    const response = await authAxios({
      method: method,
      url: url,
      data: params
    });
    return response.data;
  } catch (error) {
    console.log("Fetch error:", error);
  }
}
