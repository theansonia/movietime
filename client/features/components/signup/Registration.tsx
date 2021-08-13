import { FunctionComponent, useContext, useState } from 'react';
import { Email } from './Email';
import './Login.scss';
import { Signup } from './Signup';

export interface LoginProps {}

const Registration: FunctionComponent<LoginProps> = () => {
  const [newUser, setNewUser] = useState(false);

  return <div>{!newUser ? <Email setNewUser={setNewUser} /> : <Signup />}</div>;
};

export default Registration;
