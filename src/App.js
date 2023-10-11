
import './App.css';

function App() {


    return (
      <><h1>Sidney Crosby Card</h1><div class="buttons">
        <button id="cloneButton">Clone Card </button>
        <button id="toggleColorButton">Toggle Color</button>
        <button id="changeTextButton">Change Text</button>
        <button id="deleteCardButton">Delete Card</button>
        <button details-button>Details</button>
      </div><div id="card" class="card">
          <div class="heading">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Sidney_Crosby_2018-12-19_2.jpg">


            </img></div>


          <section>
            <h2> Description</h2>
            <p> Crosby One of the Best Penguins and Hockey Players of all time in all his glory </p>
          </section>
        </div></>
   
    )
  }

export default App;
