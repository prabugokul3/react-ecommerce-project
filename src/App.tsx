import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AppRouter } from './router/router';
import { AuthProvider } from './authContext';

function App() {

  // const GetIpAddress = async () => {
  //   try {
  //     const ip = await apiFetch({ url: '/get/ip', method: 'POST', params: {} });
  //     console.log(ip.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // console.log( navigator.userAgent)
  // GetIpAddress()
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
