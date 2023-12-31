import "./write.css"

export default function Write() {
  return (
    <div className='write'>
         <img className="writeImg" 
           src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
           alt="gdd" />
       <form className="writeForm">
         <div className="writeFormGroup">
            <label htmlFor="file">
             <i className="titleIcon fa-sharp fa-solid fa-plus"></i>
            </label>
            <input type="file" id='file' className='file' style={{display:"none"}}/>
            <input type="text" placeholder='title'  className='writeInput' autoFocus={true}/>
         </div>
         <div className="writeFormGroup">
            <textarea placeholder='Tell your Story' type="text" className='writeInput writeText'></textarea>
         </div>
         <button className='writeSubmit'>Publish</button>
       </form>
    </div>
  )
}
