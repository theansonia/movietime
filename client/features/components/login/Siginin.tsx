import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';

export interface SigninProps {}

const Signin: FunctionComponent<SigninProps> = () => {
  const [label, setLabel] = useState('SHOW');

  const handleShowClick = () => {
    if (label === 'SHOW') {
      setLabel('HIDE');
      const pw = (document.getElementsByName(
        'password'
      ) as unknown) as HTMLInputElement;
      pw[0].type = 'text';
    } else {
      setLabel('SHOW');
      const pw = (document.getElementsByName(
        'password'
      ) as unknown) as HTMLInputElement;
      pw[0].type = 'password';
    }
  };
  return (
    <div className='divdivider regdivider'>
      <div id='signin-body'>
        <div id='signin-content'>
          <div id='signin-form'>
            <h1 id='signin-main'>Sign In</h1>
            <form id='signin-form' method='post'>
              <div id='signin-form-container'>
                <div id='input-placement'>
                  <div id='email-controls'>
                    <input
                      type='text'
                      name='userId'
                      id='userId'
                      className='nfText'
                      placeholder='Email address'
                    />
                  </div>
                  <div className='signin-form-container'>
                    <div className='input-placement'>
                      <div id='password-control'>
                        <input
                          type='password'
                          name='password'
                          id='password'
                          autoComplete='password'
                          className='nfText'
                          placeholder='Password'
                          onFocus={() => {
                            const show = document.getElementById(
                              'signin-password-toggle'
                            );
                            show.style.display = 'block';
                          }}
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
                          onClick={handleShowClick}
                        >
                          {label}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button type='submit' className='signin-button'>
                    Sign In
                  </button>
                </div>
              </div>
              <div id='newsignup-container'>
                <div className='signup-now'>New to Watchr?</div>
                <Link id='click-signup' to='/registration'>
                  Sign up now.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
