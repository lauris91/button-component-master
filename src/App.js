import { Button } from './Button'
import './styles.scss'

function App() {
  return (
    <div className='wrapper'>
      <h1>Buttons</h1>
      <div className='row'>
        <div className='row-block'>
          <p>{`<Button />`}</p>
          <Button>Default</Button>
        </div>
        <div className='row-block'>
          <p className='hover'>&:hover, &:focus</p>
          <Button hover>Default</Button>
        </div>
      </div>
      <div className='row'>
        <div className='row-block'>
          <p>{`<Button variant=”outline” />`}</p>
          <Button color='primary' disableShadow variant='outline'>
            Default
          </Button>
        </div>
        <div className='row-block'>
          <p className='hover'>&:hover, &:focus</p>
          <Button variant='outline' color='primary' disableShadow hover>
            Default
          </Button>
        </div>
      </div>

      <div className='row'>
        <div className='row-block'>
          <p>{`<Button variant=”text” />`}</p>
          <Button variant='text' color='primary'>
            Default
          </Button>
        </div>
        <div className='row-block'>
          <p className='hover'>&:hover, &:focus</p>
          <Button variant='text' color='primary' hover>
            Default
          </Button>
        </div>
      </div>

      <div className='row'>
        <div className='row-block'>
          <p>{`<Button disableShadow />`}</p>
          <Button color='primary' disableShadow>
            Default
          </Button>
        </div>
      </div>

      <div className='row'>
        <div className='row-block'>
          <p>{`<Button disabled />`}</p>
          <Button disabled>Default</Button>
        </div>
        <div className='row-block'>
          <p>{`<Button variant='text' disabled />`}</p>
          <Button variant='text' disabled>
            Default
          </Button>
        </div>
      </div>

      <div className='row'>
        <div className='row-block'>
          <p>{`<Button startIcon='local_grocery_store' />`}</p>
          <Button startIcon='local_grocery_store' color='primary'>
            Default
          </Button>
        </div>
        <div className='row-block'>
          <p>{`<Button endIcon='local_grocery_store' />`}</p>
          <Button endIcon='local_grocery_store' color='primary'>
            Default
          </Button>
        </div>
      </div>

      <div className='row'>
        <div className='row-block'>
          <p>{`<Button size='sm' />`}</p>
          <Button color='primary' size='sm'>
            Default
          </Button>
        </div>
        <div className='row-block'>
          <p>{`<Button size='md' />`}</p>
          <Button color='primary'>Default</Button>
        </div>
        <div className='row-block'>
          <p>{`<Button size='lg' />`}</p>
          <Button color='primary' size='lg'>
            Default
          </Button>
        </div>
      </div>

      <div className='row'>
        <div className='row-block--narrow'>
          <p>{`<Button color='default' />`}</p>
          <Button>Default</Button>
        </div>
        <div className='row-block--narrow'>
          <p>{`<Button color='primary' />`}</p>
          <Button color='primary'>Default</Button>
        </div>
        <div className='row-block--narrow'>
          <p>{`<Button color='secondary' />`}</p>
          <Button color='secondary'>Default</Button>
        </div>
        <div className='row-block--narrow'>
          <p>{`<Button color='danger' />`}</p>
          <Button color='danger'>Default</Button>
        </div>
      </div>

      <div className='row'>
        <div className='row-block--narrow'>
          <p className='hover'>{`&:hover, &:focus`}</p>
          <Button hover>Default</Button>
        </div>
        <div className='row-block--narrow'>
          <p></p>
          <Button color='primary' hover>
            Default
          </Button>
        </div>
        <div className='row-block--narrow'>
          <p></p>
          <Button color='secondary' hover>
            Default
          </Button>
        </div>
        <div className='row-block--narrow'>
          <p></p>
          <Button color='danger' hover>
            Default
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
