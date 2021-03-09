import Vue from 'vue'
import TheInput from '../vue/page/TheInput'

Vue.config.productionTip = true

new Vue({
    el: '#appElement',
    components: {
        TheInput
    },
    template: '<TheInput/>'
})