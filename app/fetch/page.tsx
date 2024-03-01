import { cookies } from 'next/headers'

async function getData() {
  const cookieStore = cookies()
  const allCookies = cookieStore.getAll()

  let tokenCookie

  allCookies.forEach(({name, value}) => {
    let cognitoDefaultNames = name.split('.');
    let typeCognitoName = cognitoDefaultNames[cognitoDefaultNames.length - 1];
    if (typeCognitoName === "idToken") {
      tokenCookie = value
    }
});
  
  const fetchHeaders: HeadersInit = {};
  if (tokenCookie) {
    fetchHeaders['Authorization'] = tokenCookie;
  }

  const response = await fetch(`https://06u0qbt2bl.execute-api.us-east-1.amazonaws.com/Prod`, {
    headers: fetchHeaders,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data.message;
}

async function Fetch() {
  
  const message = await getData();
  return (
    <>
        <p className="text-white font-bold text-xl">Mesage: {message}</p>
    </>
  );
}

export default Fetch;
