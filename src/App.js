import Nav from './components/Nav'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Productpage from './pages/Product/Productpage'
import Cartpage from './pages/Cart/Cartpage'
import LoginScreen from './pages/Login/LoginScreen'
import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'
import { ChakraProvider} from "@chakra-ui/react"
import ScrollIntoView from "./components/Scrollintoview";
import HashLoader from "react-spinners/HashLoader";
import RegisterScreen from './components/RegisterScreen'
import ProfileScreen from './components/ProfileScreen'
import Checkout from "./pages/checkout/Checkout";
import NotFoundPage from './components/Notfoundpage'


 const App = () => { 
  const  [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout( ()=> {
      setLoading(false)
    },3000)

  }, [])

  return (
    <div className = 'main'>
<ChakraProvider>
       <Router>
         <ScrollIntoView>
         {loading ?   
            <div className='loading'>
                 <HashLoader   color={"#1e1e2c"}  loading={loading} size={40} />
            </div>
          :
         <>
                 <Nav/>
                 <Switch>              
                 <Route path="/" exact component={Home }/>
                 <Route path="/shop" component={Shop} />
                 <Route path="/product/:id" component={Productpage}/>
                 <Route path="/cart/:id?" component={Cartpage}/>
                 <Route path="/login" component={LoginScreen}/>
                 <Route path="/register" component={RegisterScreen}/>
                 <Route path="/profile" component={ProfileScreen}/>
                 <Route path="/shipping" component={Checkout}/>
                 <Route path="/search/:keyword" component={Shop}/>

                 <Route component={<NotFoundPage/>} />

                 </Switch>
          </>
         }
        </ScrollIntoView>
      </Router>
   </ChakraProvider>
    </div>
     
    
  )
}
export default App;
