import {useEffect} from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import {getAllQuotes} from '../lib/api';



// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
//     { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
//   ];
  
const AllQuotes=()=>{
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );
    useEffect(() => {
      sendRequest();
      // console.log(loadedQoutes);
    }, [sendRequest,])

    if(status==='pending'){
      return<div className='centered'>
        <LoadingSpinner/>
      </div>

    }
    if(error){
      return <p className='centered focused'> {error}</p>
    }
if(status==='completed' &&(!loadedQuotes|| loadedQuotes.length ===0)){
  return <NoQuotesFound/>
}
console.log(loadedQuotes);

    return <QuoteList quotes={loadedQuotes}>All Quotes Page</QuoteList>


}

export default AllQuotes;