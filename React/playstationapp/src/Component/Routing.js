import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import NavbarSearch from "./Home/NavbarSearch";
import Main from "./Main";
import Listing from "./listing/listinglogic";
import DetailsDisplay from "./Details/detailsLogic";
import PlaceOrder from './Orders/PlaceOrder';
import ViewOrder from './Orders/ViewOrder';


const Routing =()=>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="Listing/:categoryId" element={<Listing/>}/>
                    <Route path="details" element={<DetailsDisplay/>}/>

                    <Route path="placeOrder/:restName" element={<PlaceOrder/>}/>
                    <Route path="viewOrder" element={<ViewOrder/>}/>
                </Route>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;