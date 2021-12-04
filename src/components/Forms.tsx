import { useState } from 'react';

const Forms = () => {
  const [form, setForm] = useState({
    email: 'bob@bob.com',
    password: 'bob123',
  });

  const handleChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <>
      <h3>Forms</h3>
      <form className="form">
        <input
          className="form-control mb-2"
          placeholder="Email"
          type="text"
          value={form.email}
          onChange={({ target }) => handleChange(target.value, 'email')}
        />
        <input
          className="form-control mb-2"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={({ target }) => handleChange(target.value, 'password')}
        />
      </form>

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};

export default Forms;
