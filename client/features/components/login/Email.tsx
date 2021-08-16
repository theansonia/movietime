import { useDispatch } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import { FunctionComponent, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';

export interface EmailProps {
  setNewUser(newUser: boolean): any;
  setEmail(email: string): void;
  email: string;
}

export const Email: FunctionComponent<EmailProps> = ({
  setNewUser,
  setEmail,
  email,
}) => {
  const dispatch = useDispatch();

  const handleEmailEntered = () => {
    if (isEmail(email)) {
      setNewUser(true);
      setEmail(email);
    } else {
      const input = (document.getElementsByName(
        'email'
      ) as unknown) as HTMLInputElement;
      console.log(input);
      input[0].placeholder = 'Please enter a proper email address';
      const addCSS = document.createElement('style');
      addCSS.innerHTML = '::placeholder { color: red; }';
      input[0].append(addCSS);
      input[0].value = '';
      return;
    }
  };
  return (
    <div className='loginwrapper'>
      <div id='initialcontent'>
        <h1 id='header1'>Search movies, TV shows, and more. </h1>
        <h2 id='header2'>Link anywhere. Cancel anytime.</h2>
        <h3 id='header3'>
          Ready to watch? Enter your email to create or restart your membership
        </h3>
      </div>

      <form
        className='emailform'
        onSubmit={(e: SyntheticEvent) => {
          e.preventDefault();
          handleEmailEntered();
        }}
      >
        <div id='inputwrapper'>
          <input
            className='nfText'
            id='email'
            name='email'
            placeholder='Email address'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span onClick={handleEmailEntered}>
            <button type='button' id='getstartedbtn' className='signin-button'>
              Get Started
            </button>
          </span>
        </div>
      </form>
      <div id='signin-container'>
        <div className='signup-now'>Already a Watchr?</div>
        <Link id='click-signup' to='/signin'>
          Sign in here.
        </Link>
      </div>
    </div>
  );
};
