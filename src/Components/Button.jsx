function Button({type, onClick, children, variant="primary"}) {
    const style = {
        primary : "w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition",
        outline : "w-full border-2 border-blue-600 text-blue-600 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition",
        text : "w-full text-blue-600 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition"

    }
    
  return (
    <button type={type} onClick={onClick}  className={style[variant]}>
      {children}
    </button>
  )
}

export default Button