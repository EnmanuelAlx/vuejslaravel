<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">


                <div class="card mb-3 mt-3" v-for="item in list" :key="item.id">
                    <a class="card-header" :href="item.slug" v-text="item.title"></a>
                    <div class="card-body">
                        <p class="card-text" v-text="item.body"></p>
                    </div>
                </div>

                <infinite-loading @infinite="infiniteHandler">
                    <div slot="no-more">No hay mas datos</div>
                    <div slot="no-results">Sin resultados...</div>

                </infinite-loading>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                page: 0,
            }
        },
        methods: {
            infiniteHandler($state) {
                this.page++
                let url = `http://127.0.0.1:8000/api/posts?page=${this.page}`
                //http://127.0.0.1:8000/api/posts?page=2
                axios.get(url).then(response=>{
                    let posts = response.data.data
                    if(posts.length){
                        console.log('hey');
                        this.list = this.list.concat(posts)
                        $state.loaded()
                    }else{
                        $state.complete()
                    }
                    
                });
            }
        },
    }
</script>
