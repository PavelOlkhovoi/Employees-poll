import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddPoll } from '../../actions/shared';
import Input from '../UI/inputs/Input';
import Button from '../UI/buttons/Button';

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
        navigate('/')
    }
    return (
        <div className="container">
            <h1>Would you rather {textOne} or {textTwo} ?</h1>
            <form onSubmit={handlePoll}>

                <Input 
                type="text"
                label="Option one"
                mode={"textarea"}
                placeholder="Type the option 1" 
                name="optionOneText"
                id="optionOneText"
                value={textOne}
                onChange={(e)=>setTextOne(e.target.value)}
                />

                <Input 
                type="text"
                label="Option two"
                mode={"textarea"}
                placeholder="Type the option 2" 
                name="optionTwoText"
                id="optionTwoText"
                value={textTwo}
                onChange={(e)=>setTextTwo(e.target.value)}
                />

                <Button type="submit"
                disabled={textOne === '' || textTwo === ''}
                >
                    Create
                </Button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ authed }) => ({
    authed,
})

export default connect(mapStateToProps)(CreatePoll);