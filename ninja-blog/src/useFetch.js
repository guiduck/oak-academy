import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState('error')
  
  useEffect(() => {

    const loadData = async () => {
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw Error('could not fetch!')
          setError('could not fetch');
        } else {
          const data = await response.json();

          return data;
        }
      } catch(err) {
        console.error(err)
      }
    }

    (async ()=>{
      const data = await loadData();
      console.log(data)
      setData(data);
      setIsLoading(false);
    })()

    // loadData().then((data)=>{
    //   console.log(data);
    //   setUsers(data);
    //   setIsLoading(false);
    // });
    
  }, [url])

  return { data, isLoading, error }
}

export default useFetch;