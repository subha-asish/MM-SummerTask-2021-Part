import axios from 'axios';



export const authunticateSignup  = async (user)=>{
    axios.post('http://localhost:8000/Signup', user)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      })};