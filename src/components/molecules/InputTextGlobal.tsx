interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputGlobal = ( props:Props) => {
  return (
    <input className='InputGlobal' {...props} />
  )
}

