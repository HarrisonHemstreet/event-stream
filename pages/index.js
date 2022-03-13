import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveToRedux, revertState, saveToDb } from '../store/slices/saveStateSlice';

function Counter() {
    const savedState = useSelector(state => state.saveState.savedState);
    const timeLineOfState = useSelector(state => state.saveState.timeLineOfState);
    const dispatch = useDispatch();
    const [textValue, setTextValue] = useState("");

    const handleOnChangeTextValue = e => {
        setTextValue(e.target.value);
    }
    /*
        Create a function that gathers up every piece of
        data from each store slice and then insert that data into
        the saveStateSlice so we can hold it there. I will also
        have an action there that will pop off the last state entry
        there and give us state from the past
    */

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(revertState());
                }}
            >Revert
            </button>
            <button
                onClick={() => {
                    dispatch(saveToRedux({thisTextValue: textValue}));
                    console.log('timeLineOfState', timeLineOfState);
                }}
            >
                save
            </button>
            <input type="text" value={textValue} onChange={handleOnChangeTextValue} />
            {
                timeLineOfState.length > 0 && 
                <span>{timeLineOfState[timeLineOfState.length - 1]['thisTextValue']}</span>
            }
            <br />
            <button
                onClick={() => {
                    saveToDb();
                }}
            >Save To Database</button>
        </div>
    );
}

export default Counter;
