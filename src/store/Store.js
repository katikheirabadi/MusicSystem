import { createStore } from "vuex";
import config from '../../public/config.json'
import axios from 'axios'

export default createStore({
    state: {
        profile: {},
        language:"",
        backuploadurl : config.backuploadurl,
        apihost: config.apihost,
        userId : -1,
        backurl :{name:'panel'},
        productforbuy:0
    },
    mutations: {
        backurl(state, payload) {
          state.backurl = payload;
        },
        productforbuy(state, payload) {
            state.productforbuy = payload;
          },
        profile(state, payload) {
            state.profile = payload
        }                                                                                                                               
      },
    actions: {
        async getProfile({ commit }) {
            if (!!localStorage.getItem("token")) {
                let r = false;
                axios.get(this.state.apihost + 'api/User/GetUserBaseInfo', {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                  }
                })
                .then((res) => {
                  if (res.error != null) {
                    r = false;
                    return;
                  }
                  r = true;
                  commit("profile", res.data);
                })
                .catch((error) => {
                  console.log(error);
                })
                .finally(() => {
                  // Perform action always
                });
              
                return r;
              } else {
                return false;
              }
        }
    }
})