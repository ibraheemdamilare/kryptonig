import React from 'react';
import Feat from '../feat';
import BlogDetails from '../BlogDetails'
import PostText from '../Post-text';
import Comment from '../Comment';
import More from '../more';
import Logo from '../Logo';
import Footer from '../Footer';

const Featured = ()=>{

    return(
        <div> 
           <Feat/>
           <BlogDetails/>
           <PostText/>
           <Comment/>
           <More/>
           <Logo/>
           <Footer/>
        </div>
    )
}
export default Featured