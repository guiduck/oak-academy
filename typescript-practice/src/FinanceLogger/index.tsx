import React, { useState } from 'react';

import { 
  Container,
  Title,
  FormWrapper
} from './styles';

const FinanceLogger: React.FC = () => {

  const [type, setType] = useState('');
  const [toFrom, setToFrom] = useState('');
  const [details, setDetails] = useState('');
  const [amount, setAmount] = useState('');

  let greet: Function

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const submit = { type, toFrom, details, amount }
    console.log(submit)
    greet({name: toFrom, id: toFrom})
  }

  type StringOrNum = string|number;  

  greet = (person: {name: string, id: StringOrNum}) => {
    console.log(`hi, ${person.name} nice to meet u`)
  }

  type StrNum = string | number;

  let calc: (a: number, b: number, c:StrNum) => void;

  calc = (a, b, whatToDo) => {
    if(whatToDo === 'add') {
      return (a + b);
    } else {
      return (a - b);
    }
  }

  console.log(calc(15, 5, 'fuck')); 

  const form = document.querySelector('.theForm') as HTMLFormElement;
  
  const typeQuery = document.querySelector('type') as HTMLInputElement;
  const amountQuery = document.querySelector('#amount') as HTMLInputElement;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
      amountQuery.valueAsNumber,
      typeQuery.value
    );
  })

  return (
    <Container>
      <Title>
        this is Finance Logger
      </Title> 
      <FormWrapper>
        <form className='theForm' onSubmit={handleSubmit}>
          <div>
            <label>
              Type:
            </label>
            <select
              id='type'
             name='type'
             value={type}
             onChange={(e) => setType(e.target.value)}
            >
              <option value={`valor1`}>valor1</option>
              <option value={`valor2`}>valor2</option>
              <option value={`valor3`}>valor3</option>
            </select>
          </div>
          <div>
            <label>To/From:</label>
            <input
              id='toFrom'
              name={`To/From`} 
              type={`text`}
              value={toFrom}
              onChange={
                (e)=>setToFrom(e.target.value)
              } 
            ></input>
          </div>
          <div>
            <label>Details:</label>
            <input
              id='details'
              name={`Details`}
              type={`text`}
              value={details}
              onChange={
                (e)=>setDetails(e.target.value)
              } 
            ></input>
          </div>
          <div>
            <label>Amount (E):</label>
            <input 
              id='amount'
              name={`Amount`}
              type={`text`}
              value={amount}
              onChange={
                (e)=>setAmount(e.target.value)}
            ></input>
          </div>          
          <button>Add</button>
        </form>
      </FormWrapper>
    </Container>
  );

}

export default FinanceLogger;