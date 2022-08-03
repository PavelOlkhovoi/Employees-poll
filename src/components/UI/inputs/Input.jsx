import cl from './Input.module.css'

const Input = (props) => {
    const { type = 'text', placeholder = 'type smth', name = "name" , label = 'The label', ...otherProps} = props 
    return (
        <div className={cl.wrapper}>
            <label htmlFor={name}>{label}</label>
            <input 
            {...otherProps} 
            type={type} 
            placeholder={placeholder}
            name={name}
            label={label}
            className={cl.input}/>
        </div>
    )
}

export default Input