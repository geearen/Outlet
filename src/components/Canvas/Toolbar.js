function Toolbar({ handleColor }) {
  return (
    <div className='toolbar__color'>
      <input type='color' onChange={handleColor} className='color-option' />
    </div>
  )
}

export default Toolbar;