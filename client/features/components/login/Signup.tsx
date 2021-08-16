import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useUserContext } from '../../../contexts/UserContext';
import { setLoginStatus } from './signupslices/loginSlice';
import { useEffect, useState } from 'react';
import { fetchUser } from '../../../utils/fetchUser';
import { deconstructUsername } from '../../../utils/deconstructUsername';

export const Signup = ({ email, setEmail }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const { setUserDetails } = useUserContext();

  useEffect(() => {
    const username = document.getElementById('usernameinput');
    if (username) username.focus();
  }, [username]);

  const handleSubmitOrClick = async () => {
    // fetch and auth etc but for now let's just log them in and save to state and checking auth etc.

    const [firstName, lastName] = deconstructUsername(username);

    const userData = await fetchUser(email, password, firstName, lastName);

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
          <input
            className='nfText'
            placeholder='Add a password'
            type='password'
            id='passwordinput'
            value={password ? password : ''}
            onChange={(e) => setPassword(e.target.value)}
          />
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
