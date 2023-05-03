import {Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home/Home'
import {Chat} from './pages/Chat/Chat'
import {PrivacyPolicy} from './pages/PrivacyPolicy/PrivacyPolicy'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
  </Routes></>
    
  );
}

export default App;
