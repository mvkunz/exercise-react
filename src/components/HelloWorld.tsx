import Title from './Title';
import ModuleDetails from './ModuleDetails';
import { age } from '../utils/age';


function HelloWorld() {
  const idade = age('17/02/1997');

  return (
    <>
      <Title />
      <ModuleDetails />
      <p>Minha idade atual é: {idade}</p>
    </>
  )
}

export default HelloWorld;