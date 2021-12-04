import { useCounter } from '../hooks';

const CounterWithHook = () => {
  const { value, handleAccumulate } = useCounter(100);

  return (
    <>
      <h3>
        Counter: <small>{value}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => handleAccumulate(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => handleAccumulate(-1)}>
        -1
      </button>
    </>
  );
};

export default CounterWithHook;
