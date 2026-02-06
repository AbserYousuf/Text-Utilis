import { Component } from 'react'
import Navbar from './Components/Navbar'
import Text from './Components/Text'
import Textcontext from './Context/textcontext'
import '@fortawesome/fontawesome-free/css/all.min.css';
export default class App extends Component {
  render() {
    return (
      <>

        <Textcontext>
          <Navbar />
          <Text />
        </Textcontext>


      </>
    )
  }
}
