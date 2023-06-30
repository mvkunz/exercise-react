import Title from './Title';
import ModuleDetails from './ModuleDetails';
import { age } from '../utils/age';
import Footer from './Footer';


function HelloWorld() {
  const idade = age('17/02/1997');

  return (
    <>
      <Title />
      <ModuleDetails />
      <p>Minha idade atual é: {idade}</p>
      <Footer />
    </>
  )
}

export default HelloWorld;