import React from 'react';
import './feature.css'

const BlogDetails = (props)=>{

    return(
        <div className="details-all">
            <div className='details'>
            <div className="publisher-detail">
               <div className="f">
                 <span>Evans Sobechi</span> 
                 <span>14th April 2023</span>
                </div> 
                <div className="ff">
                    featured
                </div>
            </div>
            <div className="creator">
                <h3>4 Alternative career paths to earn in crypto without trading</h3>
            </div>
            <div className="creator-p">
                <p>How was the feeling when you decided to go into crypto? How did you cope with all those charts, those never-ending analyses? You probably saw how much you can lose if the market goes against you and wondered if you would be able to cope. Did you download a crypto trading app, open it, and wonder what all those figures and signs were doing there?</p>
            </div>
            <div className="fo">
            <div className="ff">
                    Cryptocurrency
                </div>
                <div className="ff">
                    Technology
                </div>
            </div>
        </div>
        </div>
    )
}

export default BlogDetails