import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt=""/>
        <div className="postInfo">
            <div className="postCat">
                <span className="postCats">Music</span>
                <span className="postCats">Life</span>
            </div>
            <span className="postTitle">lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum exercitationem 
          veritatis distinctio maiores consequatur esse 
          inventore? Voluptates eius aliquam libero quasi qui, 
          eaque est, rem sed nulla neque corrupti?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum exercitationem 
          veritatis distinctio maiores consequatur esse 
          inventore? Voluptates eius aliquam libero quasi qui, eaque est, rem sed nulla neque corrupti?
        </p>
    </div>
  )
}
