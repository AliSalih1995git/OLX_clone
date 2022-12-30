import {createContext,useState} from 'react'

export const PostContext = createContext(null)

function Post ({children}){
    const [postDetails,setPostDetail]=useState()
    return(
        <PostContext.Provider value={{postDetails,setPostDetail}}>
            {children}
        </PostContext.Provider>
    )

}


export default Post