import { RootState } from 'client/reducer';
import {
  FormEventHandler,
  FunctionComponent,
  SyntheticEvent,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setUserInfo } from './signupslices/userInfoSlice';

export interface EmailProps {
  setNewUser(e: boolean): any;
}

export const Email: FunctionComponent<EmailProps> = ({ setNewUser }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleEmailEntered = () => {
    setNewUser(true);
    dispatch(setUserInfo({ email: value }));
  };
  return (
    <div id='loginwrapper'>
      <h1 id='header1'>Search movies, TV shows, and more. </h1>
      <h2 id='header2'>Link anywhere. Cancel anytime.</h2>

      <form
        className='emailform'
        onSubmit={(e: SyntheticEvent) => {
          e.preventDefault();
          handleEmailEntered();
        }}
      >
        <h3 id='header3'>
          Ready to watch? Enter your email to create or restart your membership
        </h3>

        <div id='inputwrapper'>
          <input
            className='input'
            placeholder='Email address'
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <span onClick={handleEmailEntered}>
            <button type='button' id='getstartedbtn'>
              Get Started
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};
