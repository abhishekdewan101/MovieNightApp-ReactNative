import { FETCH_POST } from './Types'


export const fetchPosts = () => dispatch =>  {
        console.log(FETCH_POST);
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POST,
            payload: data
        }))
        .catch(err => console.log(err));
}