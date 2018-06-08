
Vue.component('vue-nav-menu', {
    props: ['buttons'],
    template:
`
`
}) 
Vue.component('vue-nav-button', {
    props: ['name','classes','link'],
    template: 
`<li :class="classes" style="border-radius:5px;">
    <a class="nav-link js-scroll-trigger" style="color:white;border-radius:5px;" :href="link">{{name}}</a>
</li>`, 
})

var vue_nav_menu = new Vue({
    el:"#vue_nav_menu",
    data: {
        buttons: [
            {name:"Members",link:"./members.html",classes:"nav-item bg-info"},
            {name:"Cheat Sheet", link:"./gamepad.html", classes:"nav-item bg-warning"},
            {name:"Javadoc", link:"https://ftctechnh.github.io/ftc_app/doc/javadoc/index.html", classes:"nav-item bg-success"},
            {name:"Repos", link:"./repositories.html", classes:"nav-item bg-success"}
            // {name:"Tutorial", link:"/5060-tutorials", classes:"nav-item bg-success"}
        ],
        homeButton: {name:"Back Home",link:"./index.html",classes:"nav-item bg-danger"}
    }
    
});