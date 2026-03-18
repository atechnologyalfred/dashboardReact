function Button({btnText, btnStyle, onClick}){
    return (
        <>
        <button className={`${btnStyle} btn-others `} onClick={onClick}>{btnText}</button>
        </>
    )
}
export default Button;