function ColorPicker({ handleColor }) {
  return (
    <div>
      <input type='color' onChange={handleColor} />
    </div>
  )
}

export default ColorPicker;