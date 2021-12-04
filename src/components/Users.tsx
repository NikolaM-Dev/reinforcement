import { useEffect, useRef, useState } from 'react';

import { reqResAPI } from '../api';
import { ReqResAPI, User } from '../interfaces';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);

  const loadUsers = async () => {
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

  const renderItem = ({
    avatar,
    email,
    first_name,
    id,
    last_name,
  }: User): React.ReactNode => {
    return (
      <tr key={id}>
        <td>
          <img
            alt={first_name}
            src={avatar}
            style={{ width: 35, borderRadius: '50%' }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderItem)}</tbody>
      </table>

      <button className="btn btn-primary" onClick={loadUsers}>
        Next
      </button>
    </>
  );
};

export default Users;
