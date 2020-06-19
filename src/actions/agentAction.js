import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_USER = "GET_USER";
export const SEND_MESSAGE = "SEND_MESSAGE"

export const getUser = data => dispatch => {
  axiosWithAuth()
    .get(`https://bookedup-pt9.herokuapp.com/api/users/${data}`)
    .then(res => {
      console.log(res)
      dispatch({type: GET_USER, payload: res.data.user})
    })
    .catch(err => {
      console.log(err.message)
    })
};

export const sendMessage = data => dispatch => {
  let submitData = {
    subject: data.subject,
    body: data.body,
    recipient: data.recipient,
    recipient_id: data.recipient_id,

}
  axiosWithAuth()
    .post(`https://bookedup-pt9.herokuapp.com/api/message/${data.sender_id}`, submitData)
    .then(res => {
      dispatch({type: SEND_MESSAGE});
      window.location.replace('/messages');
    })
    .catch(err => {
      console.log(err)
    })
}

