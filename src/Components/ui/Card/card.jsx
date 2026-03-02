

const Card = ({children, className, ActionButton, ...props}) => {
  return (
    <>
      <div 
      className=
      {`card
        ${className || ""}`}
        {...props}>

        {children}

        {ActionButton && <ActionButton />}
      </div>
    </>
  )
}

export default Card