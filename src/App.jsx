import { useState } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Courses from './Components/Courses/Courses'
import Selections from './Components/Selections/Selections'

function App() {
  const [selections, setSelections] = useState([]);
  const [remainingTime, setRemainingTime] = useState(0);
  const [price, setPrice] = useState(0);
  const handleAddToSelections = (course) => {
    let isDuplicate = false;
    for (const selection of selections) {
      if (selection.id === course.id) {
        isDuplicate = true;
        break;
      }
    }

    const newRemainginTime = remainingTime + course.credit;
    if (!(newRemainginTime > 20)) {
      let newPrice = price + course.price;
      if (!isDuplicate) {
        setPrice(newPrice);
        setRemainingTime(newRemainginTime);
        const newSelections = [...selections, course];
        setSelections(newSelections);
      }
      else {
        toast.info("This Was Already Selected", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          pauseOnFocusLoss: false,
          transition: Slide,
          theme: "light",
        });
      }
    }
    else {
      
      toast.warn("You cannot pass 20 hour mark for credits", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: false,
        pauseOnFocusLoss: false,
        transition: Slide,
        theme: "light",
      });

    }


  }
  return (
    <>
      <h1 className='font-bold text-3xl text-center'>Course Registration</h1>
      <main className='md:flex'>
        <Courses handleAddToSelections={handleAddToSelections}></Courses>
        <ToastContainer>
        </ToastContainer>
      <Selections selections={selections} remainingTime={remainingTime} price={price}></Selections>
    </main>
    </>
  )
}

export default App
