import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useUserContext } from '../../../contexts/UserContext';
import { setLoginStatus } from './signupslices/loginSlice';
import { useEffect, useState } from 'react';
import { createUser } from '../../../utils/fetchUser';
import { deconstructUsername } from '../../../utils/deconstructUsername';
import { handleShowClick } from '../../../utils/handleShowClick';
import { RootState } from 'client/reducer';

export const Signup = ({ email, setEmail }) => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn.value);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [label, setLabel] = useState('SHOW');
  const { setUserDetails } = useUserContext();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) history.push('/home');
  }, []);

  useEffect(() => {
    const username = document.getElementById('usernameinput');
    if (username) username.focus();
  }, [username]);

  const handleSubmitOrClick = async () => {
    // fetch and auth etc but for now let's just log them in and save to state and checking auth etc.

    const [firstName, lastName] = deconstructUsername(username);

    const userData = await createUser(email, password, firstName, lastName);

    setUserDetails(userData);
    dispatch(setLoginStatus(true));
    history.push('./home');
  };

  return (
    <div className='loginwrapper' id='signupwrapper'>
      <div id='headerwrapper'>
        <h1 id='signupheader1'>Create a password to start your account</h1>
        <p id='signuppar' style={{ fontSize: '.4rem' }}>
          Just a few more steps and you're done! We hate paperwork, too.
        </p>
      </div>
      <div className='emailandpwwrapper'>
        <form
          className='emailform'
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitOrClick();
          }}
        >
          <input
            className='nfText'
            id='usernameinput'
            placeholder={username ? username : 'First and Last Name'}
            type='text'
            value={username ? username : ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
        <form
          className='emailform'
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitOrClick();
          }}
        >
          <input
            className='nfText'
            placeholder={email ? email : 'Email'}
            id='emailinput'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <form
          className='emailform'
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitOrClick();
          }}
        >
          <div id='password-control'>
            <input
              className='nfText'
              placeholder='Add a password'
              type='password'
              id='passwordinput'
              name='password'
              value={password ? password : ''}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => {
                const show = document.getElementById('signup-password-toggle');
                show.style.display = 'block';
              }}
            />
            <button
              id='signup-password-toggle'
              type='button'
              title='Show password'
              className='password-toggle'
              onClick={() => setLabel(handleShowClick(label))}
            >
              {label}
            </button>
          </div>
        </form>

        <button
          type='button'
          id='btndivider'
          className='signin-button '
          onClick={handleSubmitOrClick}
        >
          Sign Up!
        </button>
      </div>
    </div>
  );
};
