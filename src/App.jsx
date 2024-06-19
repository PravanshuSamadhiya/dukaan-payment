
import './App.css'
import Full from "./components/Full"
import Dashboard from './components/Dashboard'
import { Topbar } from './components/Topbar'
import Transaction from './components/Transaction'
import Table from "./components/Table"
import Footer from "./components/Footer";
function App() {
  
  return (
   <div className='bg-[#FAFAFA]'>
     <Dashboard/>
    <div className='border-b border-[#D9D9D9] sm:pl-64 bg-[#FAFAFA]'>
      <Topbar/>
    </div>

    <div className='m-5 mb-0 sm:ml-64 grid gap-8'>
      <Full/>
      <div className='grid gap-6'>
        <Transaction/>
        <Table/>
      </div>
      <Footer/>
    </div>
   </div>
  )
}

export default App
