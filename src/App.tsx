import { Content } from './Components/Content'
import { Header } from './Components/Header'
import './index.css'

export function App() {

  return (
    <div className='bg-person-600 w-full pb-4'>
      <Header />
      <Content />
    </div>
  )
}
