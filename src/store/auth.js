import axios from 'axios'

export default ({
    namespaced: true,
    state: {
        token: null,
        user: '',
        verify: null,
        name: '',
    },
    getters: {
        authenticated (state){
            return state.token
        },
        user(state) {
            return state.user
        },
        verified(state){
            return state.verify
        }
    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token
        },
        SET_USER(state, data){
            state.user = data
        },
        SET_VERIFICATION(state, verify){
            state.verify = verify
        }
    },
    actions: {
        async signIn ( { dispatch }, credentials) {
            let response = await axios.post('auth/login', credentials)
            return  dispatch('attempt', response.data.access_token)
        },

        async attempt ( { commit, state }, token){
            if (token){
                commit('SET_TOKEN', token)
            }
            if (!state.token){
                return
            }
            try{
                let response = await axios.get('auth/me')
                commit('SET_USER', response.data)
                commit('SET_VERIFICATION',response.data.email_verified_at)

            }catch (e) {
                commit('SET_USER', null)
                commit('SET_TOKEN', null)
            }
        },
        signOut({ commit }){
            return axios.post('auth/logout').then(() => {
                commit('SET_USER', null)
                commit('SET_TOKEN', null)
            })
        },
        async register( { dispatch }, credentials){
            let response = await axios.post('auth/register', credentials)
            await axios.get('email/resend', {
                headers:{
                    'Authorization': 'Bearer ' + response.data.access_token
                }
            })

            return dispatch('attempt', response.data.access_token)

        }
    }
})