import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'

function App() {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
    age: null
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);


  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.email.length < 15) {
      errors.email = "Email is too short";
    }
    if (inputValues.password.length < 5) {
      errors.password = "Password is too short";
    }
    if (!inputValues.age || inputValues.age < 18) {
      errors.age = "Minimum age is 18";
    }
    return errors;
  };




  const finishSubmit = () => {
    console.log(inputFields);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);


  return (
    <Form/>
  )
}

export default App
