interface Person {
  name: string;
  age: number;
  fullName?: string;
  address: Address;
}
interface Address {
  country: string;
  houseNumber: string;
}

const LiteralObjects = () => {
  const person: Person = {
    name: 'Nikola',
    age: 21,
    address: {
      country: 'Colombia',
      houseNumber: '8-24',
    },
  };

  return (
    <>
      <h3>LiteralObjects</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  );
};

export default LiteralObjects;
