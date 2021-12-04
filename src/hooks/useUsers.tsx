import { useEffect, useRef, useState } from 'react';

import { reqResAPI } from '../api';
import { ReqResAPI, User } from '../interfaces';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef<number>(1);

  const loadUsers = async (): Promise<void> => {
    try {
      const res = await reqResAPI.get<ReqResAPI>('/users', {
        params: { page: pageRef.current },
      });

      if (res.data.data.length > 0) {
        setUsers(res.data.data);
        pageRef.current++;
      } else alert('No more records');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return { users, loadUsers };
};
