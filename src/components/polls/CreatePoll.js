import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddPoll } from '../../actions/shared';


const CreatePoll = ({ authed, dispatch, questions }) => {
    const [textOne, setTextOne] = useState('')
    const [textTwo, setTextTwo] = useState('')
    const navigate = useNavigate();

    const handlePoll = (e) => {
        e.preventDefault();
        const dataDB = {
            author: authed.status,
            optionOneText: textOne,
            optionTwoText: textTwo,
        }
        dispatch(handleAddPoll(dataDB))
        setTextOne('')
        setTextTwo('')
        // navigate('/')
    }
    return (
        <div className="container">
            <h1>Would you rather {textOne} or {textTwo} ?</h1>
            <form onSubmit={handlePoll}>
                <div>
                    <label htmlFor="optionOneText">Option 1</label>
                    <textarea type="text" placeholder="Type the option 1" id="optionOneText" 
                    value={textOne}
                    onChange={(e)=> setTextOne(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="optionTwoText">Option 2</label>
                    <textarea type="text" placeholder="Type the option 2" id="optionTwoText"
                    value={textTwo}
                    onChange={(e)=>setTextTwo(e.target.value)} 
                    />
                </div>
                <button type="submit"
                disabled={textOne === '' || textTwo === ''}
                >
                    Create
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ authed }) => ({
    authed,
})

export default connect(mapStateToProps)(CreatePoll);