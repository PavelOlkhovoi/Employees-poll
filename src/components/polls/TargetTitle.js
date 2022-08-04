import cl from './TargetTitle.module.css'

const TargetTitle = ({show, text, polls, total, isActive}) => {
    const rootTitle = [cl.title]

    if(isActive === text) {
        rootTitle.push(cl.active)
    }

    return (
        <h3 className={rootTitle.join(' ')} onClick={()=>show(polls, text)}>{text} {total}</h3>
    )
}

export default TargetTitle