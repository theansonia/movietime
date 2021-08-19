import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import validator from 'validator';
import isStrongPassword from 'validator/lib/isStrongPassword';
import { useUserContext } from '../../../contexts/UserContext';
import { useEffect, useState } from 'react';
import { deconstructUsername } from '../../../utils/deconstructUsername';
import { handleShowClick } from '../../../utils/handleShowClick';
import {
  finishAuthentication,
  isAuthenticated,
  signup,
} from '../../../utils/AuthService';

export const Signup = ({ email, setEmail }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [label, setLabel] = useState('SHOW');
  const [badPassword, setBadPassword] = useState(false);
  const [signupError, setSignUpError] = useState('');
  const { setUserDetails } = useUserContext();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated()) history.push('/home');
  }, []);

  useEffect(() => {
    const username = document.getElementById('usernameinput');
    if (username) username.focus();
  }, [username]);

  const handleSubmitOrClick = async () => {
    // fetch and auth etc but for now let's just log them in and save to state and checking auth etc.

    if (!validator.isEmail(email)) {
      const input = (document.getElementById(
        'emailinput'
      ) as unknown) as HTMLInputElement;
      input.placeholder = 'Please enter a proper email address';
      const addCSS = document.createElement('style');
      addCSS.innerHTML = '::placeholder { color: red; }';
      input.append(addCSS);
      input.value = '';
      return;
    }

    if (
      !isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      const input = (document.getElementById(
        'passwordinput'
      ) as unknown) as HTMLInputElement;
      input.placeholder = 'Enter Valid Password';
      const addCSS = document.createElement('style');
      addCSS.innerHTML = '&::placeholder { color: red; }';
      input.append(addCSS);
      input.value = '';
      setBadPassword(true);
      return;
    }
    const [first_name, last_name] = deconstructUsername(username);
    const data = { email, password, first_name, last_name };
    const response = await signup(data);

    if (response) {
      finishAuthentication(response);
    } else {
      setSignUpError('some kind of error');
      return;
    }
    setUserDetails(data);

    history.push('./home');
  };

  return (
    <div className='divdivider regdivider'>
      <div id='signup-container'>
        <div id='signup-content'>
          <div id='signup-form'>
            <div id='headerwrap'>
              <h1 id='signupheader1'>
                Create a password to start your account
              </h1>
              <p id='signuppar'>
                Just a few more steps and you're done! We hate paperwork, too.
              </p>
            </div>
            <div id='signup-form-container'>
              <div id='input-placement'>
                <form
                  className='emailform'
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitOrClick();
                  }}
                  id='email-form'
                >
                  <div id='email-control'>
                    <input
                      className='nfText'
                      id='usernameinput'
                      placeholder={username ? username : 'First and Last Name'}
                      type='text'
                      value={username ? username : ''}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </form>
                <form
                  className='emailform'
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitOrClick();
                  }}
                  id='username-form'
                >
                  <div id='email-controls'>
                    <input
                      type='text'
                      // name='userId'
                      id='emailinput'
                      className='nfText'
                      placeholder='Email address'
                      value={email}
                      onChange={(e) => setEmail(e.target.value.toLowerCase())}
                    />
                  </div>
                </form>
                <form
                  className='emailform'
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitOrClick();
                  }}
                  id='password-form'
                >
                  <div id='email-control'>
                    <input
                      className='nfText'
                      placeholder='Add a password'
                      type='password'
                      id='passwordinput'
                      name='password'
                      value={password ? password : ''}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => {
                        const show = document.getElementById(
                          'signup-password-toggle'
                        );
                        show.style.display = 'block';
                      }}
                    />
                    <button
                      id='signup-password-toggle'
                      type='button'
                      title='Show password'
                      className='password-toggle'
                      onClick={() => setLabel(handleShowClick(label))}
                      // style={{ marginLeft: label === 'HIDE' ? '.5rem' : '0' }}
                    >
                      {label}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button
            type='button'
            id='btndivider'
            className='signin-button '
            onClick={handleSubmitOrClick}
          >
            Sign Up!
          </button>
          {badPassword && (
            <div id='badpassword'>
              Please enter password with min length of 8, 1 uppercase letter, 1
              lowercase letter, 1 symbol and 1 number
            </div>
          )}
          {signupError && <div>{signupError}</div>}
        </div>
      </div>
    </div>
  );
};
