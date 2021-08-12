import { RootState } from 'client/reducer';
import { FunctionComponent, SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Email } from './Email';
import './Login.scss';
import { Signup } from './Signup';

export interface LoginProps {}

const Registration: FunctionComponent<LoginProps> = () => {
  const [newUser, setNewUser] = useState(false);
  

  return <>{!newUser ? <Email setNewUser={setNewUser} /> : <Signup />}</>;
};

export default Registration;
