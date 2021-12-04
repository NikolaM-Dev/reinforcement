const Functions = () => {
  const add = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Functions</h3>
      <span>The result is: {add(10, 5)}</span>
    </>
  );
};

export default Functions;
