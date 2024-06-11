import axios from 'axios'
import Swal from 'sweetalert2';
import config from '../../../public/config.json'
async function Callaxios(url, method, input, callbackfunc) {
  try {
    if (localStorage.getItem('token') != null && localStorage.getItem('token') != '') { axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` }
    document.getElementById('loader').style.display = 'block';
    //   base url
    var baseUrl = config.apihost + 'api/';
    var fullurl = baseUrl + url;
    if (input == undefined) {
      if (method == 'post') {
        const responce = await axios.post(fullurl)
        if (responce.data) {
          document.getElementById('loader').style.display = 'none';
          if (responce.data.TypeInt == 1) {

            Swal.fire({
              icon: "error",
              title: 'خطا',
              text: responce.data.Message,
              confirmButtonColor: 'red'
            });
          }
          else {
            eval(callbackfunc)(responce.data);
          }
        }
      }
      else if (method == 'get') {
        const response = await axios.get(fullurl)
        if (response.data) {
          document.getElementById('loader').style.display = 'none';
          if (response.data.TypeInt == 1) {

            Swal.fire({
              icon: "error",
              title: 'خطا',
              text: response.data.Message,
              confirmButtonColor: 'red'
            });
          }
          else {
            eval(callbackfunc)(response.data);
          }
        }
      }
    } else {
      if (method == 'post') {
        const responce = await axios.post(fullurl, input)
        if (responce.data) {
          document.getElementById('loader').style.display = 'none';
          if (responce.data.TypeInt == 1) {

            Swal.fire({
              icon: "error",
              title: 'خطا',
              text: responce.data.Message,
              confirmButtonColor: 'red'
            });
          }
          else {
            eval(callbackfunc)(responce.data);
          }
        }
      }
    }
  }
  catch (error) {
    document.getElementById('loader').style.display = 'none';
    console.log(error)
    var message = error.responce == undefined ? error : (error.response.data.Message == undefined ? error.message : error.response.data.Message)
    Swal.fire({
      icon: "error",
      title: 'خطا',
      text: message,
      confirmButtonColor: 'red'
    });
  }

}
export { Callaxios }