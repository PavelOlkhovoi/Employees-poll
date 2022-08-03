import cl from './Button.module.css'

const Button = (props) => {
    console.log(cl)
    const { text = 'text', ...otherProps} = props 
    return (
        <button className={cl.btn} {...otherProps}>{text}</button>
    )
}

export default Button