import Vue from 'vue'
import Vuex from 'vuex'
import {url} from "~/config"
import types from "./types.js"


Vue.use(Vuex)

const store = () => new Vuex.Store({
    state:{
        navData:[],         //导航数据
        slideData:[],       //幻灯片数据
    },
    actions:{
        async getNav({commit,state},data){        //获取导航数据
            let  navData = await Vue.http.get(url.getNav)
            //console.log( JSON.stringify(navData) );
            commit(types.GET_NAV,navData);
        },
        async getSlide({commit,state},data){        //获取幻灯片数据
            let slideData = await Vue.http.get(url.getSlide,{
                params:{
                    typeid:1
                }
            })
            //console.log(slideData)
            commit(types.GET_SLIDE,slideData);
        }
    },
    mutations:{
        [types.GET_NAV](state,data){
            state.navData = data
        },
        [types.GET_SLIDE](state,data){
            state.slideData = data
        }
    },
})

export default store