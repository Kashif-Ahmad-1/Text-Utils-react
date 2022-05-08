import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 
function App() {
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="KashifUtils" />
    <div className="container">
      <TextForm heading="Enter the tex to Analyze"/>
    </div>
    </> 
  );
}

export default App;