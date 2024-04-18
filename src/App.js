
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Womanpage from './My project/pages/womenpage';
import Landpage from './My project/components/landpage';
import Menpage from './My project/pages/Menpage';
import Kidpage from './My project/pages/kidPage';
import Traditionalpage from './My project/pages/tradpage';
import Womensingle from './My project/singles/womensingle';
import Mensingle from './My project/singles/mensingle';
import Tradsingle from './My project/singles/tradsingles';
import Kidsingle from './My project/singles/kidsingles';
import UserCart from './My project/Usecart';
import AboutPage from './My project/components/About';
import Product from './My project/components/products';
import ContactPage from './My project/components/concat';
import { Register } from './My project/components/Register';
import { Login } from './My project/components/login';
function App() {
  return (
    
        <>
        
         <Routes>
          <Route>
          <Route path='/' element={<Landpage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/men' element={<Menpage/>}/> 
          <Route path='/women' element={<Womanpage/>}/>
          <Route path='/kid' element={<Kidpage/>}/>
          <Route path='/tradational' element={<Traditionalpage/>}/>
          <Route path='/women/:id'element={<Womensingle/>}/>
          <Route path='/men/:id'element={<Mensingle/>}/>
          <Route path='/tradation/:id'element={<Tradsingle/>}/>
          <Route path='/kid/:id'element={<Kidsingle/>}/>
          <Route path='/cart'element={<UserCart/>}/>
          <Route path='/register'element={<Register/>}/>
          <Route path='/login'element={<Login/>}/>
       
          </Route>

         </Routes>
        </>
  );
}

export default App;
