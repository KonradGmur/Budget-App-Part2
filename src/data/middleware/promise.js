export default promiseMiddleware() {
    return function(next){
        return function(action){
            const {promise} = action;
        }
    }
}