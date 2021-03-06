
import './index.css';

import {books} from './books';
import {Book} from './book'

function App() {
  return (
    <section className='booklist'>
     {
       books.map((book)=>{
         return <Book key={book.id} {...book}></Book>
       })
     }
    </section>
  );
}




export default App;
