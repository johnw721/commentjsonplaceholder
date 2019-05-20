import jsonPlaceholder from '../apis/jsonplaceholder';
import _ from 'lodash'

export const fetchPost =()=> async dispatch=>{
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type:'FETCH_POST',payload:response.data})
    };

export const fetchUser = (id)=>async dispatch=>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response.data})
};

export const fetchPostsAndUsers=()=>async (dispatch, getState)=>{
    await dispatch(fetchPost());
    const userId=_.uniq(_.map(getState().posts,'userId')) 
    userId.forEach(id=>dispatch(fetchUser(id)))
    }
