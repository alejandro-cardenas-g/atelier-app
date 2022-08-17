import { Spin } from 'antd'

export const Spinner = () => {
    return (
      <div className='spinner-fallback'>
        <Spin size='large'/>
      </div>
    )
}

export const SpinnerScreen = () => {
  return (
    <div className='spinner-screen'>
      <Spin size='large'/>
    </div>
  )
}
