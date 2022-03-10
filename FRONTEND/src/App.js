import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AddAndroidModel from './components/AddAndroidModel';
import ListAndroidModels from './components/ListAndroidModels';
import View from './components/View';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css" ;



 function App () {
  
    return ( 
       <BrowserRouter> 
        <div className="container">
         
         <Header/> 
          <Routes>
                  <Route path="/" element={<ListAndroidModels/>}></Route>
                  <Route path="/android" element={<ListAndroidModels/>}></Route>
                  <Route path="/add-android" element={<AddAndroidModel/>}></Route>
                  <Route path="/view-android/:id" element={<View/>}></Route> 
                  <Route path="/android/edit/:id" element={<AddAndroidModel/>}></Route>
           </Routes>
            <Footer />
            </div>
            </BrowserRouter>
       
  );
}


export default App;
