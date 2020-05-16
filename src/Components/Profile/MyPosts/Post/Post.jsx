import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
  
        <div>
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsmVJBHDA9ejdKGYEzRCgV3Cs18El5-ESvS5oRHOwDR5I1VrJF&usqp=CAU"></img>
               {props.message}
                <div>
                    <span>Like</span>
                </div>
           </div>
        </div>  
       )

}

export default Post;