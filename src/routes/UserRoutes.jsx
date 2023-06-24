import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BooksSeats, BookTickets,  Details,  Home, Page404, Payments, Register, Trailer } from '../pages'
import User from './Layouts/User'

const UserRoutes = () => {
  return <>

    <Routes>
<Route path="/" element={<User/>}  >
<Route index element={<Home/>}  />
<Route path="details" element={<Details/>}  />
<Route path='trailer' element={<Trailer/>}/>
<Route path="user-signUp" element={<Register/>}  />
<Route path="book-tickets" element={<BookTickets/>}  />
<Route path="book-seats" element={<BooksSeats/>}  />
<Route path="payment" element={<Payments/>}/>
    </Route>
    <Route path="*" element={<Page404/>}/>
    </Routes>

  </>

}

export default UserRoutes