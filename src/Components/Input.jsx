function Input ({type='text', placeholder, name, id, value, onChange}) {
    return (
        <>
        <input 
        style={{padding: '10px', borderRadius: '5px', 
            border: '1px solid #ccc', 
            marginBottom: '10px'}}
        type={type} 
        placeholder={placeholder} 
        name={name} 
        id={id} 
        value={value} 
        onChange={onChange}
        required />
        </>
    )
}
export default Input;