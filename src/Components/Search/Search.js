import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { FirebaseContext } from '../../store/Context';
import Heart from '../../assets/Heart';
import { useHistory } from 'react-router-dom'
import { PostContext } from '../../store/PostContext';

function Search() {
    // const [data, setData] = useState({});
    const { firebase } = useContext(FirebaseContext)
    const [products, setProducts] = useState([])
    const { setPostDetail } = useContext(PostContext)
    const history = useHistory()

    //   useEffect(()=>{
    //       firebase.firestore().collection('products').get().then((snapshot)=>{
    //        const allPost = snapshot.docs.map((product)=>{
    //         return {
    //           ...product.data(),
    //           id:product.id
    //         }
    //        })
    //         setProducts(allPost)
    //       })
    //   },[])

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    let query = useQuery();
    let search = query.get("name")
    console.log("search", search);

    useEffect(() => {
        searchData();
    }, [search])

    const searchData = () => {
        firebase.child("products").orderByChild("name").equalTo(search).on("value", (snapshot) => {
            const allPost = snapshot.docs.map((product)=>{
                        return {
                          ...product.data(),
                          id:product.id
                        }
                       })
                
                       setProducts(allPost)
            
        })
    }
    return (
        <>
            <div className="postParentDiv">
                <div className="moreView">
                    <div className="heading">
                        <span>Quick Menu</span>
                    </div>
                    <div className="cards">

                        {products.map(product => {

                            return <div
                                className="card"
                                onClick={() => {
                                    setPostDetail(product)

                                    history.push('/view')
                                }}
                            >
                                <div className="favorite">
                                    <Heart></Heart>
                                </div>
                                <div className="image">
                                    <img src={product.url} alt="" />
                                </div>
                                <div className="content">
                                    <p className="rate">&#x20B9; {product.price}</p>
                                    <span className="kilometer">{product.category} </span>
                                    <p className="name"> {product.name}</p>
                                </div>
                                <div className="date">
                                    <span>{product.createdAt}</span>
                                </div>
                            </div>

                        })}

                    </div>
                </div>
                
            </div>

        </>
    )
}

export default Search