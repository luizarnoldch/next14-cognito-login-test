'use client'

import { Amplify } from 'aws-amplify';
import { CookieStorage  } from 'aws-amplify/utils';
import config from '../aws-exports.js';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';

Amplify.configure(config);
cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());

const AuthEntrypoint = () => {
  return null
}

export default AuthEntrypoint
