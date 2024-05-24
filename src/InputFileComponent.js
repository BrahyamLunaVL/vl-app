import './InputFileComponent.css'

function InputFileComponent() {
  return(
    <div className="file-list">
      <div className='file'>
        <div className='file-description'>
          <div className='file-details'>
            <i className="fa-regular fa-file"></i>
            <div className='file-properties'>
              <p>Name File</p>
              <p>200 kb</p>
            </div>
          </div>
          <i className="fa-regular fa-trash-can"></i>
        </div>
        <div className='file-progress'>
          <progress id="file" max="100" value="80">80%</progress>
          <p>80%</p>
        </div>
      </div>
      <div className='file'>
        <div className='file-description'>
          <div className='file-details'>
            <i className="fa-regular fa-file"></i>
            <div className='file-properties'>
              <p>Name File</p>
              <p>200 kb</p>
            </div>
          </div>
          <i className="fa-regular fa-trash-can"></i>
        </div>
        <div className='file-progress'>
          <progress id="file" max="100" value="30">30%</progress>
          <p>30%</p>
        </div>
      </div>
    </div>  
  )
}

export {InputFileComponent}