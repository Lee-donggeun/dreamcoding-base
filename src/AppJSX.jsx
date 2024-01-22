import './App.css';

function AppJSX() {
  const name = '동근';
  const list = ['우유', '바나나', '딸기', '요거트'];
  return (
    <>
      <h1 className='orange'>Hello!</h1>
      <h1>Hello!</h1>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img 
        style={{ width: '200px', height: '200px'}}
        src='https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='nature'
      />
    </>
  );
}

export default AppJSX;
