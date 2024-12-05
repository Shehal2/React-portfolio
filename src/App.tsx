import Nav from './componnent/nav';
import Footer from './componnent/fotter';

function App() {
  
  return (
   <main className="">
    <Nav />
      
    <header className='p-32 grid grid-cols-2'>
      <img src="" alt=""/>
      <div className="text flex flex-col items-start gap-5 justify center">
        <div className="text-7x1 front-bold"> Hi,I'm Theekshana</div>
        <div className="text-xl text-gray-300">
        I'm a Software Developer.Working towards creating software that makes life easier and more meaningful.
        </div>
      </div>
      

    </header>


    <Footer/>
   </main>
  
  )
}

export default App
