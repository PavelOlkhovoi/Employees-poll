import cl from './PercentDisplay.module.css'

const PercentDisplay = (props) => {
    const {percent = 0} = props
    return (
        <div className={cl.cover}>
            <span className={cl.indicator} style={{width: `${percent}%`}}></span>
        </div>
    )
}

export default PercentDisplay