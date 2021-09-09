import { Button } from './Button'
import './styles.scss'

function App() {
  return (
    <div className='wrapper'>
      <h1>Buttons</h1>
      <div className='row'>
        <div>
          <p>{`<Button />`}</p>
          <Button />
        </div>
        <div>
          <p className='hover'>&:hover, &:focus</p>
          <Button hover />
        </div>
      </div>
    </div>
  )
}

export default App
