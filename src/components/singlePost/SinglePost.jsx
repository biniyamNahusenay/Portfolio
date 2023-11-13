import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
       <div className="wrapper">
          <img className="singlePostImg" 
           src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
           alt="gdd" />

          <h1 className='singlePostTitle'>
            Lorem ipsum dolor sit amet
            <div className="singlePostEdit">
               <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
               <i class="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author : <b>Bini</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa
             commodi obcaecati voluptatem distinctio provident modi consequatur eveniet 
            quia expedita iure dolore, similique minima molestiae asperiores, doloremque rerum tempore laboriosam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa
             commodi obcaecati voluptatem distinctio provident modi consequatur eveniet 
            quia expedita iure dolore, similique minima molestiae asperiores, doloremque rerum tempore laboriosam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa
             commodi obcaecati voluptatem distinctio provident modi consequatur eveniet 
            quia expedita iure dolore, similique minima molestiae asperiores, doloremque rerum tempore laboriosam.
        </p>
       </div>
    </div>
  )
}
