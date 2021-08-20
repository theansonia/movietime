import { RootState } from 'client/reducer';
import { FunctionComponent, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Email } from './Email';
import './Login.scss';
import { Signup } from './Signup';

export interface LoginProps {}

const Registration: FunctionComponent<LoginProps> = () => {
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className='divdivider regdivider'>
      {!newUser ? (
        <Email setNewUser={setNewUser} email={email} setEmail={setEmail} />
      ) : (
        <Signup email={email} setEmail={setEmail} />
      )}
    </div>
  );
};

export default Registration;
