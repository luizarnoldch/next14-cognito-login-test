// import type { NextRequest } from 'next/server'
// // utils/AuthStoreToken.js
// const AuthStoreToken = async (request: NextRequest) => {
//   // Se asume que el token se envía desde el cliente en un encabezado personalizado o en una cookie
//   // const token = request.cookies.get('token') || ''; // Asegúrate de enviar el token desde el cliente

//   const token = localStorage.getItem('token');
//   console.log("token: ", token)

//   const headers = new Headers(request.headers);
//   if (token) {
//     headers.set('Authorization', `${token}`);
//   }

//   return headers;
// };

// export default AuthStoreToken