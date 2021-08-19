import { FunctionComponent, SyntheticEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { handleShowClick } from '../../../utils/handleShowClick';
import { useUserContext } from '../../../contexts/UserContext';
import { useDispatch } from 'react-redux';
import {
  finishAuthentication,
  isAuthenticated,
  login,
} from '../../../utils/AuthService';
export interface SigninProps {}

const Signin: FunctionComponent<SigninProps> = () => {
  const [label, setLabel] = useState('SHOW');
  const { userDetails } = useUserContext();
  const [signupError, setSignUpError] = useState(null);
  const { setUserDetails } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated()) history.push('/home');
  }, []);

  const handleSubmitOrClick = async () => {
    const email = userDetails.email.toLowerCase();
    const password = userDetails.password;
    const data = { email, password };
    // const { user, token } = await login(data);

    const response = await login(data);

    if (response.token) {
      finishAuthentication(response.token);
    } else {
      setSignUpError(response);
    }
    if (response.user) {
      setSignUpError(null);
      history.push('./home');
      setUserDetails(response.user);
    }
  };

  return (
    <div className='divdivider regdivider'>
      <div id='signin-body'>
        <div id='signin-content'>
          <div id='signin-form'>
            <h1 id='signin-main'>Sign In</h1>
            <div id='signin-form-container'>
              <div id='input-placement'>
                <form
                  className='signin-form'
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitOrClick();
                  }}
                  style={{ width: '12rem', marginBottom: '1rem' }}
                  method='post'
                >
                  <div id='email-control'>
                    <input
                      type='text'
                      name='email'
                      id='userId'
                      className='nfText'
                      placeholder='Email address'
                      value={userDetails.email || ''}
                      onChange={(e) =>
                        setUserDetails({
                          [e.target.name]: e.target.value,
                          password: userDetails.password,
                        })
                      }
                      style={{ width: '12rem' }}
                    />
                  </div>
                </form>
                <div className='signin-form-container' id='password-container'>
                  <div className='input-placement'>
                    <form
                      className='signin-form'
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmitOrClick();
                      }}
                      style={{ width: '12rem' }}
                      method='post'
                    >
                      <div id='password-control'>
                        <input
                          type='password'
                          name='password'
                          id='password'
                          autoComplete='password'
                          className='nfText'
                          placeholder='Password'
                          value={userDetails.password || ''}
                          onChange={(e) =>
                            setUserDetails({
                              [e.target.name]: e.target.value,
                              email: userDetails.email,
                            })
                          }
                          onFocus={() => {
                            const show = document.getElementById(
                              'signin-password-toggle'
                            );
                            show.style.display = 'block';
                          }}
                          onSubmit={() => {
                            handleSubmitOrClick();
                          }}
                          style={{ width: '12rem' }}
                          // onBlur={(e) => {
                          //   if (e.target.id === 'signin-password-toggle') return;
                          //   const show = document.getElementById(
                          //     'signin-password-toggle'
                          //   );
                          //   show.style.display = 'none';
                          // }}
                        />

                        <button
                          id='signin-password-toggle'
                          type='button'
                          title='Show password'
                          className='password-toggle'
                          onClick={() => setLabel(handleShowClick(label))}
                          // style={{
                          //   marginLeft: label === 'HIDE' ? '.5rem' : '0',
                          // }}
                        >
                          {label}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div id='signin-button-container' onClick={handleSubmitOrClick}>
                  <button type='button' className='signin-button'>
                    Sign In
                  </button>
                </div>
              </div>
            </div>
            <div id='newsignup-container'>
              <div className='signup-now'>New to Watchr?</div>
              <Link className='signup-now' id='click-signup' to='/registration'>
                Sign up now.
              </Link>
            </div>
          </div>
          {signupError && (
            <div
              // id='newsignup-container'
              style={{
                backgroundColor: '#faba3e',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                fontSize: '14px',
                margin: ' 24px 0 12px',
                width: '12rem',
              }}
            >
              <div>Incorrect password. Please try again!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
