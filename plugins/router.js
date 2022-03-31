export default ({ app, store }) => {
    app.router.beforeEach((to, from, next) => {
        // 设置条件//access_token
        if(process.browser){
            console.log(to, from,process.browser,localStorage.getItem('access_token'))
            const access_token = localStorage.getItem('access_token')
            if(!access_token){
                if(to.path!='/'){
                    app.router.push({ name: '/' })
                }
            }
        }
        
        next()
    })
}