
import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FamilyTree from './Components/FamilyTree/FamilyTree'
import FormAction from './Components/FormAction/FormAction'
import HookForm from './Components/HookForm/HookForm'

import ProductManagement from './Components/productManagement/ProductManagement'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UnControlled from './Components/unControlled/UnControlled'
import Form from './testForm/Form'

function App() {


  return (
    <>
    <h1>Explore react form</h1>
      {/* <SimpleForm/> */}
      {/* <FormAction/> */}

      {/* <ControlledField/> */}
      {/* <UnControlled/> */}

      {/* <HookForm/> */}
      {/* <HookObjectForm/> */}
      <ProductManagement/>
      {/* <FamilyTree/> */}

      <Form/>
    </>
  )
}

export default App
