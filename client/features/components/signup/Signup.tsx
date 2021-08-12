import { RootState } from 'client/reducer';
import { FunctionComponent, SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { EmailProps } from './Email';
import { setUserInfo } from './signupslices/userInfoSlice';

export const Signup = () => {
  const { email } = useSelector((state: RootState) => state.userinfo.userinfo);
  const [temp, setTempPw] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitOrClick = () => {
    // fetch and auth etc but for now let's just log them in and save to state and checking auth etc.
    dispatch(setUserInfo({ email: email, password: temp }));
    history.push('./home');
  };
  return (
    <div id='signupwrapper'>
      <h1 id='header1'>Create a password to start your account</h1>
      <p id='header2' style={{ fontSize: '.4rem' }}>
        Just a few more steps and you're done! We hate paperwork, too.
      </p>

      <form
        className='emailform'
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmitOrClick();
        }}
      >
        <div id='emailandpwwrapper'>
          <input
            className='emailpwinput'
            placeholder={email ? email : 'Email'}
            type='text'
            value={email}
            onChange={(e) => dispatch(setUserInfo({ email: e.target.value }))}
          />
        </div>
      </form>
      <form
        className='emailform'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitOrClick();
        }}
      >
        <div id='emailandpwwrapper'>
          <input
            className='emailpwinput'
            placeholder='Add a password'
            type='password'
            value={temp}
            onChange={(e) => setTempPw(e.target.value)}
          />
        </div>
        <div id='btndivider'>
          <button
            type='button'
            id='getstartedbtn'
            onClick={handleSubmitOrClick}
          >
            Sign Up!
          </button>
        </div>
      </form>
    </div>
  );
};
