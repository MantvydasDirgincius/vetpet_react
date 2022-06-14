import Button from '../../UI/Button/Button.jsx';
import { Link } from 'react-router-dom';
import './addPets.css';
import Input from '../../UI/Input/Input.jsx';
function AddPetsPage() {
  return (
    <main className='container'>
      <section className='hero'>
        <h1>Add Pets</h1>
        <Link to='/'>
          <Button full>Back to pets</Button>
        </Link>
      </section>
      <section className='formSection'>
        <form className='addForm'>
          <div>
            <label htmlFor='name'>Name</label>
            <Input type='text' name='name' placeholder='Name' />

            <label htmlFor='data'>Date of birth</label>
            <Input name='data' placeholder='Date of birth' type='text' />

            <label htmlFor='email'>Client email</label>
            <input type='email' name='email' placeholder='@email.com' />
          </div>
          <Button type='submit' full>
            Add pet
          </Button>
        </form>
      </section>
    </main>
  );
}

export default AddPetsPage;
