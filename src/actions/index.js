import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_START});
    axios.get('http://localhost:3333/smurfs')
        .then(res=>{
            dispatch({type:FETCH_SUCCESS, payload:res.data});
        })
        .catch(err=>{
            dispatch({type:SET_ERROR, payload:err});
        })
}

export const addSmurf = (smurf) => dispatch => {
    if (smurf.name === '' ||  smurf.nickname === '' || smurf.position === '' || smurf.description === '') {
        dispatch({type:SET_ERROR, payload: "Name, Position, Nickname and Summary are required fields."});
        return;
    }

    dispatch({type: FETCH_START});
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res=> {
            dispatch({type:ADD_SMURF, payload: smurf});
        })
        .catch(err=>{
            dispatch({type:SET_ERROR, payload:err.response.data.Error});
        })
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.