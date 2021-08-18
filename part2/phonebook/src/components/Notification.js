const Notification = ({ message, color}) => {
    const messageStyle = {
      background:'#E9E7EC',
      color: color,
      fontStyle: 'italic',
      fontSize: 28,
      border: '3px solid',
      borderRadius:'5px',
      padding:'8px',
      marginBottom:'13px'
    }
  
    if (message === null) {
      return null
    }
  
    return (
      <div style={messageStyle}>
        {message}
      </div>
    )
}

export default Notification