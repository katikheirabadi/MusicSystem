import { createStore } from "vuex";
import axios from 'axios'

export default createStore({
    state: {
        profile: {},
        language:"",
        backuploadurl : 'https://tms.bamdad.co/',
        userId : -1,
        backurl :''
    },
    mutations: {
        backurl(state, payload) {
          state.backurl = payload;
        }                                                                                                                                
      },
    actions: {
        async getProfile({ commit }) {
            // if (localStorage.getItem("token") != null && localStorage.getItem("token") != "") {
            //     var r = false;
            //     await axios.get('http://localhost:5034/api/Users/GetUserBaseInfo',  {headers: {
            //         Authorization: `Bearer ${localStorage.getItem("token")}`}
            //       },)
            //         .then((res) => {
            //             // console.log(res);
            //             if (res.error != null) {
                    
            //                 r = false;
            //                 return
            //             }
            //             r = true;
            //             // console.log(res.response)
            //             commit("profile", res.data.Data);

            //         })
            //         .catch((error) => {
            //             console.log(error);

            //         }).finally(() => {
            //             //Perform action in always
            //         });

            //     return r;
            // }
            // else {
            //     return false;
            // }
        }
    }
})