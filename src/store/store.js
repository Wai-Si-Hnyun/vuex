import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {name: 'Product1', price: 100},
            {name: 'Product2', price: 200},
            {name: 'Product3', price: 300}
        ]
    },
    getters: {
        saleProducts: state => {
            return state.products.map(product => {
                return {
                    name: '**' + product.name +'**',
                    price: '**' + product.price + '**'
                }
            });
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            })
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function() {
                context.commit('reducePrice', payload);
            }, 2000)
        }
    }
})