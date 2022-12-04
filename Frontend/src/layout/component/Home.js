import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddAirports from '../../airport/component/AddAirports';
import ViewAirports from '../../airport/component/ViewAirports';
import Login from '../../authentication/component/Login';
import Logout from '../../authentication/component/Logout';
import AddBooking from '../../booking/component/AddBooking';
import ViewBookings from '../../booking/component/ViewBooking';
import AddFlights from '../../flight/component/AddFlights';
import DeleteFlights from '../../flight/component/DeleteFlights';
import UpdateFlights from '../../flight/component/UpdateFlights';
import ViewFlights from '../../flight/component/ViewFlights';
import AddSchedule from '../../schedule/component/AddSchedule';
import AddScheduledFlight from '../../scheduledflight/component/AddScheduledFlights';
import DeleteScheduleFlights from '../../scheduledflight/component/DeleteScheduledFlights';
import UpdateScheduledFlights from '../../scheduledflight/component/UpdateScheduledFlights';
import ViewScheduledFlights from '../../scheduledflight/component/ViewScheduledFlights';
import ViewScheduledFlightsAdminView from '../../scheduledflight/component/ViewScheduledFlightsAdminView';
import ViewScheduledFlightsAirports from '../../scheduledflight/component/ViewScheduledFlightsAirports';
import AddUsers from '../../user/component/AddUsers';
import DeleteUsers from '../../user/component/DeleteUsers';
import UpdateUsers from '../../user/component/UpdateUsers';
import ViewUsers from '../../user/component/ViewUsers';
import Page from './Page';
import Header from './Header';
import Links from './Links';
import Redirect from './Redirect';
import DeleteBooking from '../../booking/component/DeleteBooking';
import ViewBookingId from '../../booking/component/ViewBookingId';
import UpdatePassengers from '../../passenger/component/UpdatePassengers';
import PayNow from '../../booking/component/PayNow';


function Home(){
    return(
        <div className='container'>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Page/>}/>
                    <Route path="/links" element={<Links/>}/>

                    <Route path="/login" element={<Login />}/>
                    <Route path="/logout" element={<Logout/>} />
                    <Route path="/redirect" element={<Redirect/>} />

                    <Route path="/airports" element={<ViewAirports />}/>
                    <Route path="/airports/add" element={<AddAirports />}/>

                    <Route path="/flights" element={<ViewFlights />}/>
                    <Route path="/flights/add" element={<AddFlights />}/>
                    <Route path="/flights/update/:flightNumber" element={<UpdateFlights />}/>
                    <Route path="/flights/delete/:flightNumber" element={<DeleteFlights />}/>

                    <Route path="/schedule/add" element={<AddSchedule />}/>

                    <Route path="/scheduleFlight" element={<ViewScheduledFlights />}/>
                    <Route path="/scheduleFlight/admin" element={<ViewScheduledFlightsAdminView />}/>
                    <Route path="/scheduleFlight/search" element={<ViewScheduledFlightsAirports />}/>
                    <Route path="/scheduleFlight/add" element={<AddScheduledFlight />}/>
                    <Route path="/scheduleFlight/admin/update/:flightNumber" element={<UpdateScheduledFlights />}/>
                    <Route path="/scheduleFlight/admin/delete/:flightNumber" element={<DeleteScheduleFlights />}/>

                    <Route path="/users" element={<ViewUsers />}/>
                    <Route path="/users/add/" element={<AddUsers />}/>
                    <Route path="/users/update/:id" element={<UpdateUsers />}/>
                    <Route path="/users/delete/:id" element={<DeleteUsers />}/>

                    <Route path="/booking/:scheduleFlightId" element={<AddBooking />}/>
                    <Route path="/booking/view" element={<ViewBookings />}/>
                    <Route path="/booking/view/:bookingId" element={<ViewBookingId />}/>
                    <Route path="/booking/update/:bookingId" element={<UpdatePassengers/>}/>
                    <Route path="/booking/delete/:bookingId" element={<DeleteBooking/>}/>
                    <Route path="/booking/paynow/:bookingId" element={<PayNow/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default Home;