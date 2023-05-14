

const reducer = (state, action) => {
    if(action.type === 'TRENDING'){
        return {...state,error:false,loading:false,trendingMovies:action.payload}
    }
    if(action.type === 'RECOMENDED'){
        return {...state,error:false,loading:false,popularMovies:action.payload}
    }
}

export default reducer
