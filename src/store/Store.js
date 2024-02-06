import { createStore } from "vuex";

import axios from 'axios'

export default createStore({
    state: {
        profile: {},
        language:"",
        backuploadurl : 'https://tms.bamdad.co/',
        apihost: 'http://localhost:5015',
        userId : -1,
        backurl :{name:'panel'}
    },
    mutations: {
        backurl(state, payload) {
          state.backurl = payload;
        },
        profile(state, payload) {
            state.profile = payload
        }                                                                                                                               
      },
    actions: {
        async getProfile({ commit }) {
            if (localStorage.getItem("token") != null && localStorage.getItem("token") != "") {
                var r = false;
                await axios.get(this.state.apihost + '/api/User/GetUserBaseInfo',  {headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`}
                  },)
                    .then((res) => {
                        // console.log(res);
                        if (res.error != null) {
                    
                            r = false;
                            return
                        }
                        r = true;
                        // console.log(res.response)
                        commit("profile", res.data);

                    })
                    .catch((error) => {
                        console.log(error);

                    }).finally(() => {
                        //Perform action in always
                    });

                return r;
            }
            else {
                return false;
            }
        }
    }
})