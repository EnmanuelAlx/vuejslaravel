
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('app', require('./components/AppComponent.vue').default);

Vue.component('posts', require('./components/PostsComponent.vue').default);
Vue.component('InfiniteLoading', require('vue-infinite-loading').default);


const app = new Vue({
    el: '#app'
});
