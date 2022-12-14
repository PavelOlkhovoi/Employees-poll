import cl from './Input.module.css'

const Input = (props) => {
    const { type = 'text', placeholder = 'type smth', name = "name" , label = 'The label', status = 'ok',
    mode = 'input', ...otherProps} = props
    const rootClasses = [cl.input]

    if(status === 'error'){
        rootClasses.push(cl.error)
    }

    return (
        <div className={cl.wrapper}>

            <label htmlFor={name}>{label}</label>

            {
                mode === 'input'
                ? <input 
                {...otherProps} 
                type={type} 
                placeholder={placeholder}
                name={name}
                label={label}
                status={status}
                className={rootClasses.join(' ')}
                />
                : <textarea 
                {...otherProps} 
                type={type} 
                placeholder={placeholder}
                name={name}
                label={label}
                status={status}
                className={rootClasses.join(' ')}
                />


            }

        </div>
    )
}

export default Input