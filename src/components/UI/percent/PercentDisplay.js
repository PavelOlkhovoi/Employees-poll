import cl from './PercentDisplay.module.css'

const PercentDisplay = (props) => {
    const {percent = 0, color = 'green'} = props

    return (
        <div className={cl.cover}>
            <span className={cl.indicator} style={{width: `${percent}%`, background: color}}></span>
        </div>
    )
}

export default PercentDisplay