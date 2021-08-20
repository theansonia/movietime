import { useUserContext } from '../contexts/UserContext';
import { refreshUser } from '../utils/AuthService';
import { useEffect, useState } from 'react';

export const useDoRefreshUser = async () => {
  const { setUserDetails } = useUserContext();
  const [userResponse, setUserResponse] = useState(null);

  useEffect(() => {
    const doRefresh = async () => {
      const response = await refreshUser();
      if (response) {
        setUserDetails(response.user);
        setUserResponse(response);
      }
      return;
    };

    doRefresh();
  }, []);

  return userResponse;
};
