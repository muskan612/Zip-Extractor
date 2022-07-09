import  React, { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faDropbox, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import './Drive.css'
import DropboxChooser from 'react-dropbox-chooser'

const Drive = () => {
//     const [openPicker, authResponse] = useDrivePicker();  
//   // const customViewsArray = [new google.picker.DocsView()]; // custom view
//   const handleOpenPicker = () => {
//     openPicker({
//       clientId: "730961399599-l6joifk96fnj5t49skppnqih42lkj83p.apps.googleusercontent.com",
//       developerKey: "AIzaSyCwDohitmn0OL7_jCpdlBo5_kJ552VSjSM",
//       viewId: "DOCS",
//       // token: token, // pass oauth token in case you already have one
//       showUploadView: true,
//       showUploadFolders: true,
//       supportDrives: true,
//       multiselect: true,
//       // customViews: customViewsArray, // custom view
//       callbackFunction: (data) => {
//         if (data.action === 'cancel') {
//           console.log('User clicked cancel/close button')
//         }
//         console.log(data)
//       },
//     })
//   }

  

  return (
    <div className="other-inputs">
    <div className='inputs'>
        {/* <a className='drive-input' onClick={() => handleOpenPicker()}> */}
        <a className='drive-input'>
            <FontAwesomeIcon className='icons' icon={faGoogleDrive} />
            <span> from Google Drive</span>
        </a>
        <a className="dropbox-input">
            {/* <DropboxChooser 
                appKey={'ba1cnfz1uqxi1mp'}
                success={files => this.onSuccess(files)}
                cancel={() => this.onCancel()}
                multiselect={true}
                extensions={['.mp4']} >
                    
            </DropboxChooser> */}
            <FontAwesomeIcon className='icons' icon={faDropbox} />
            <span> Dropbox</span>   
        </a>
        <a className="url-input">
            <FontAwesomeIcon className='icons' icon={faLink} />
            <span> URL</span>
        </a>
    </div>
    </div>
  )
}

export default Drive