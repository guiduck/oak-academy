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

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const submit = { type, toFrom, details, amount }
  }

  return (
    <Container>
      <Title>
        <h1>
          this is Finance Logger
        </h1>  
      </Title> 
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Type:
            </label>
            <select name='type'>
              <option value={`valor1`}>valor1</option>
              <option value={`valor2`}>valor2</option>
              <option value={`valor3`}>valor3</option>
            </select>
          </div>
          <div>
            <label>To/From:</label>
            <input
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