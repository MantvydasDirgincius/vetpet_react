import styles from './addPets.module.scss';
import Button from '../../UI/Button/Button.jsx';
import { Link } from 'react-router-dom';
import Input from '../../UI/Input/Input.jsx';
import { useState } from 'react';
function AddPetsPage() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [replace, setReplace] = useState(false);

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
    if (data.changes === 1) setingReplace();
  }
  function setingReplace() {
    setReplace((previous) => !previous);
  }

  function sendForm(e) {
    e.preventDefault();

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
    <main className={` ${replace ? `${styles.addPets} container` : 'container'}`}>
      <section className='hero'>
        <h1>Add Pets</h1>
        <Link to='/'>
          <Button full>Back to pets</Button>
        </Link>
      </section>
      {!replace ? (
        <form onSubmit={(e) => sendForm(e)} className={styles.addForm}>
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
      ) : (
        <div className={styles.addMore}>
          <h2>Pet added successfully </h2>
          <p>Do you want to add another one?</p>
          <div className={styles.answerBtn}>
            <Button full onClick={setingReplace}>
              YES
            </Button>
            <Link to='/'>
              <Button>NO</Button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default AddPetsPage;
