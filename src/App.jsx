import General from './components/General';
import Education from './components/Education';
import Professional from './components/Professional';

function App() {
  return (
    <>
      <section>
        <General />
      </section>
      <section>
        <h2>Education</h2>
        <Education />
      </section>
      <section>
        <h2>Professional Experiece</h2>
        <Professional />
      </section>
    </>
  );
}

export default App;
