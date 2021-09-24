import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const abortCont = new AbortController();

    const loadData = async () => {
      try {
        const response = await fetch(url, { signal: abortCont.signal });
        if(!response.ok) {
          throw Error('could not fetch!')
          setError('could not fetch');
        } else {
          const data = await response.json();

          return data;
        }
      } catch(err) {
        
        if ( err.name === 'AbortError' ) {
          console.error('fetch aborted')
        } else {
          setError(err.message)
          setIsLoading(false)
        }
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
    

    return () => console.log('clean up')
  }, [url])

  return { data, isLoading, error }
}

export default useFetch;