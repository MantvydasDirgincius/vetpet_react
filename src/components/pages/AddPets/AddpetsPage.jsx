import Button from '../../UI/Button/Button.jsx';
import { Link } from 'react-router-dom';
import './addPets.css';
import Input from '../../UI/Input/Input.jsx';
import { useState } from 'react';
function AddPetsPage() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');

  function handleInput(e, setinput) {
    setinput(e.target.value);
  }

  function clearInputs() {
    setName('');
    setDob('');
    setEmail('');
  }

  async function postingNewPet(petObj) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petObj),
    };
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets', options);
    const data = await resp.json();
    if (data.changes === 1) {
    }
  }

  function sendForm(e) {
    e.preventDefault();
    console.log('veikia');
    if (name === '' || dob === '' || email === '') {
      return;
    }
    const newPet = {
      name,
      dob,
      client_email: email,
    };
    clearInputs();
    postingNewPet(newPet);
  }

  return (
    <main className='container'>
      <section className='hero'>
        <h1>Add Pets</h1>
        <Link to='/'>
          <Button full>Back to pets</Button>
        </Link>
      </section>
      <form onSubmit={(e) => sendForm(e)} className='addForm'>
        <div>
          <label htmlFor='name'>Name</label>
          <Input onChange={(e) => handleInput(e, setName)} value={name} type='text' name='name' placeholder='Name' />

          <label htmlFor='data'>Date of birth</label>
          <Input
            onChange={(e) => handleInput(e, setDob)}
            value={dob}
            name='data'
            placeholder='Date of birth'
            type='text'
          />

          <label htmlFor='email'>Client email</label>
          <input
            onChange={(e) => handleInput(e, setEmail)}
            value={email}
            type='email'
            name='email'
            placeholder='@email.com'
          />
        </div>
        <Button type='submit' full>
          Add pet
        </Button>
      </form>
    </main>
  );
}

export default AddPetsPage;
