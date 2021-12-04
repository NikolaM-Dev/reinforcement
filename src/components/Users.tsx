import { useEffect, useState } from 'react';

import { reqResAPI } from '../api';
import { ReqResAPI, User } from '../interfaces';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    reqResAPI
      .get<ReqResAPI>('/users')
      .then((res) => setUsers(res.data.data))
      .catch(console.error);
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

      <button className="btn btn-primary">Next</button>
    </>
  );
};

export default Users;
