import { FunctionComponent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { handleShowClick } from '../../../utils/handleShowClick';
import { useUserContext } from '../../../contexts/UserContext';
import { fetchUser } from '../../../utils/fetchUser';
import { setLoginStatus } from './signupslices/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'client/reducer';
export interface SigninProps {}

const Signin: FunctionComponent<SigninProps> = () => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn.value);
  const [label, setLabel] = useState('SHOW');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserDetails } = useUserContext();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) history.push('/home');
  }, []);

  const handleSubmitOrClick = async () => {
    history.push('./home');
    const data = { email, password };
    const userData = await fetchUser(data, 'get');
    setUserDetails(userData);
    dispatch(setLoginStatus(true));
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
                      name='userId'
                      id='userId'
                      className='nfText'
                      placeholder='Email address'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: '12rem' }}
                    />
                  </div>
                </form>
                <div className='signin-form-container'>
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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
                          style={{
                            marginLeft: label === 'HIDE' ? '.5rem' : '0',
                          }}
                        >
                          {label}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <button
                  type='button'
                  className='signin-button'
                  onClick={handleSubmitOrClick}
                >
                  Sign In
                </button>
              </div>
            </div>
            <div id='newsignup-container'>
              <div className='signup-now'>New to Watchr?</div>
              <Link className='signup-now' id='click-signup' to='/registration'>
                Sign up now.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
