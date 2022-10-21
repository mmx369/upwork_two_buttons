export const Button = ({ text, id, type = 'button', onClick, className }) => {
  return (
    <button id={id} type={type} onClick={onClick} className={className}>
      {text}
    </button>
  )
}
