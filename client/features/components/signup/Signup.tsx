import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useUserContext } from '../../../contexts/UserContext';
import { setUserInfo } from './signupslices/userInfoSlice';
import { setLoginStatus } from './signupslices/loginSlice';
import { useEffect } from 'react';

export const Signup = () => {
  const { email, password, username } = useUserContext();
  const dispatch = useDispatch();
  const history = useHistory();
  const { setUserDetails } = useUserContext();

  useEffect(() => {
    const username = document.getElementById('usernameinput');
    if (username) username.focus();
  }, [username]);

  const handleSubmitOrClick = () => {
    let name: string;
    // fetch and auth etc but for now let's just log them in and save to state and checking auth etc.
    if (!username) {
      name = '';
    } else if (username.split(' ').length < 2) {
      name = username;
    } else {
      name =
        username.split(' ')[0][0].toUpperCase() +
        username.split(' ')[0].substring(1) +
        ' ' +
        username.split(' ')[1][0].toUpperCase() +
        username.split(' ')[1].substring(1);
    }

    dispatch(
      setUserInfo({
        email: email,
        password: password,
        username: name,
      })
    );
    setUserDetails({
      email: email[0].toUpperCase() + email.substring(1),
      password: password,
      username: name,
    });
    dispatch(setLoginStatus(true));
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
            id='usernameinput'
            placeholder={username ? username : 'First and Last Name'}
            type='text'
            value={username ? username : ''}
            onChange={(e) =>
              setUserDetails({
                email: email,
                password: password,
                username: e.target.value,
              })
            }
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
            placeholder={email ? email : 'Email'}
            type='text'
            value={email}
            onChange={(e) =>
              setUserDetails({
                email: e.target.value,
                password: password,
                username: username,
              })
            }
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
            value={password ? password : ''}
            onChange={(e) =>
              setUserDetails({
                email: email,
                password: e.target.value,
                username: username,
              })
            }
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
