import styles from './AddMeds.module.scss';
import Button from '../../UI/Button/Button.jsx';
import { Link } from 'react-router-dom';
import Input from '../../UI/Input/Input.jsx';
import { useState } from 'react';
function AddMedsPage() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [replace, setReplace] = useState(false);

  function handleInput(e, setinput) {
    setinput(e.target.value);
  }

  function clearInputs() {
    setName('');
    setDesc('');
  }

  async function postingNewPet(petObj) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petObj),
    };
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds', options);
    const data = await resp.json();
    if (data.changes === 1) setingReplace();
  }
  function setingReplace() {
    setReplace((previous) => !previous);
  }

  function sendForm(e) {
    e.preventDefault();

    if (name === '' || desc === '') {
      return;
    }
    const newPet = {
      name,
      description: desc,
    };
    clearInputs();
    postingNewPet(newPet);
  }

  return (
    <main className={` ${replace ? `${styles.addPets} container` : 'container'}`}>
      <section className='hero'>
        <h1>Add Medication</h1>
        <Link to='/medication'>
          <Button full>BACK TO MEDICATIONS LIST</Button>
        </Link>
      </section>
      {!replace ? (
        <form onSubmit={(e) => sendForm(e)} className={styles.addForm}>
          <div>
            <label htmlFor='name'>Name</label>
            <Input onChange={(e) => handleInput(e, setName)} value={name} type='text' name='name' placeholder='Name' />

            <label htmlFor='description'>Description</label>
            <Input
              onChange={(e) => handleInput(e, setDesc)}
              value={desc}
              name='desc'
              placeholder='Description'
              type='text'
            />
          </div>
          <Button type='submit' full>
            ADD MEDICATION
          </Button>
        </form>
      ) : (
        <div className={styles.addMore}>
          <h2>Medication added successfully </h2>
          <p>Do you want to add another one?</p>
          <div className={styles.answerBtn}>
            <Button full onClick={setingReplace}>
              YES
            </Button>
            <Link to='/medication'>
              <Button>NO</Button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default AddMedsPage;
