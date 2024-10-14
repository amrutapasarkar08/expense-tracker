import { React, useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer'
import Income from '../income/Income'
import Expenses from '../expense/Expenses';
import Dashboard from '../dashboard/Dashboard';
import Transaction from '../transaction/Transactions';
import { GlobalProvider } from '../../context/GlobalContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function AdminLayout() {
  const [active, setActive] = useState(1)
  const [name, setName] = useState(false)
  const navigate = useNavigate()
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/v1/dashboard`)
          .then(response => {
            if(response.data.status === true){
              setName(response.data.name)
            }
          })
          .catch((err) => console.log(err))
  
  },[])

  const logout = () =>{
    axios.get(`http://localhost:5000/api/v1/logout`)
    .then(response => {
      setName('')
      navigate('/login')
    })
    .catch((err) => console.log(err))
  }

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }
  
  return (
    <>
    <GlobalProvider>
    <div className="flex h-full w-full">
      <Sidebar active={active} setActive={setActive} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full mt-5">
            <div className="ml-10">
              <Navbar active={active} name={name} logout={logout}/>
            </div>
            <div className="mx-auto mb-auto h-full min-h-[80vh] p-20 pt-5 md:pr-2">
              <div>
                {displayData()}
              </div>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
    </GlobalProvider>
    </>
  )
}

