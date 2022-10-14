//Vue olduğu için vue crate app kurmamız lazım 
const app = Vue.createApp({
    // data, functions
    //template: '<h2> I am the template</h2>' bu her zaman doğru bir yaklaşım olmayabilir 
    //çünkü ; daha fazla html kodu olduğunda işler karışabilir bunun yerine...
    data(){
        return {
            url:'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {
                    title:'The Lord Of The Rings',
                    author:'Abdullah Turgut', 
                    img: 'assets/thelordoftherings.jpg',
                    isFav:false
                },
                {
                    title:'Les Miserables',
                    author:'Abdullah Turgut', 
                    img: '/assets/lesmiserables.jpg',
                    isFav:true
                },
                {
                    title:'The Private Life Of Brain',
                    author:'Abdullah Turgut', 
                    img: '/assets/privatelifeofthebrain.jpg',
                    isFav:true
                }
            ]
            // title: 'The Final Empire',
            // author : 'Abdullah Turgut',
            // age : 26,
            // x : 0,
            // y : 0

        }
    },
    methods: {
        // changeTitle(title){
        //     //console.log('You clicked me')
        //     // this.title = "Lord Of The Rings"
        //     this.title = title
        // }
            toggleShowBooks(){
                this.showBooks = !this.showBooks
            },
            toggleFav(book){
                book.isFav = !book.isFav
            }
            // handleEvent(e,data){
            //     console.log(e,e.type)
            //     if(data){
            //         console.log(data)
            //     }
            // },
            // handleMousemove(e){
            //     this.x = e.offsetX
            //     this.y = e.offsetY
            // }
    }
})

app.mount('#app')