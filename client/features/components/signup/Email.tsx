import { useDispatch } from 'react-redux';
import { useUserContext } from '../../../contexts/UserContext';
import { FunctionComponent, SyntheticEvent, useState } from 'react';

import { setUserInfo } from './signupslices/userInfoSlice';

export interface EmailProps {
  setNewUser(newUser: boolean): any;
}

export const Email: FunctionComponent<EmailProps> = ({ setNewUser }) => {
  const dispatch = useDispatch();
  const { setUserDetails, email } = useUserContext();

  const handleEmailEntered = () => {
    setNewUser(true);
    dispatch(setUserInfo({ email: email }));
    setUserDetails({ email: email });
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
            value={email}
            onChange={(e) => setUserDetails({ email: e.target.value })}
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
