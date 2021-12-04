import { useEffect, useReducer } from 'react';

interface AuthSate {
  validated: boolean;
  token: string | null;
  username: string;
  name: string;
}

interface LoginPayload {
  username: string;
  name: string;
}

type AUTH_ACTION =
  | { type: 'logout' }
  | { type: 'login'; payload: LoginPayload };

const initialState: AuthSate = {
  validated: true,
  token: null,
  username: '',
  name: '',
};

const authReducer = (state: AuthSate, action: AUTH_ACTION): AuthSate => {
  switch (action.type) {
    case 'logout':
      return {
        validated: false,
        token: null,
        name: '',
        username: '',
      };

    case 'login': {
      const { name, username } = action.payload;

      return {
        validated: false,
        token: 'TOKEN_123',
        name,
        username,
      };
    }

    default:
      return state;
  }
};

const Login = () => {
  const [{ validated, token, name }, dispatch] = useReducer(
    authReducer,
    initialState,
  );

  useEffect(() => {
    setTimeout(() => dispatch({ type: 'logout' }), 1500);
  }, []);

  const login = () =>
    dispatch({
      type: 'login',
      payload: { name: 'David Merchan', username: 'Nikola' },
    });

  const logout = () => dispatch({ type: 'logout' });

  if (validated) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validating...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Authenticated like: {name}</div>
      ) : (
        <div className="alert alert-danger">Not authenticated</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};

export default Login;
