import { useForm } from '../hooks/useForm';
const Forms = () => {
  const { form, email, password, age, handleChange } = useForm({
    email: 'bob@bob.com',
    password: 'bob123',
    age: 21,
  });

  return (
    <>
      <h3>Forms</h3>
      <form className="form">
        <input
          className="form-control mb-2"
          placeholder="Email"
          type="text"
          value={email}
          onChange={({ target }) => handleChange(target.value, 'email')}
        />
        <input
          className="form-control mb-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={({ target }) => handleChange(target.value, 'password')}
        />
        <input
          className="form-control mb-2"
          placeholder="Age"
          type="number"
          value={age}
          onChange={({ target }) => handleChange(target.value, 'age')}
        />
      </form>

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};

export default Forms;
