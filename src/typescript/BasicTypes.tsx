export const BasicTypes = () => {
  const name = 'Nikola';
  const age = 35;
  const isActive = true;
  const powers: string[] = ['velocity', 'fly', 'super strong'];

  return (
    <>
      <h3>Basic Types</h3>
      {name}, {age}, {isActive ? 'active' : 'no active'}
      <br />
      {powers.join(', ')}
    </>
  );
};

export default BasicTypes;
