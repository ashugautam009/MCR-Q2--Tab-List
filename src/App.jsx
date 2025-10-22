
import './App.css'
import TabList from './tab-list'
import {tabdata} from './constant.jsx'

function App() {

  return (
    
    <div>
        <TabList tabs={tabdata}/>
    </div>
  )
}

export default App
