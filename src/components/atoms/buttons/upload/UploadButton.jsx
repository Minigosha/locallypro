import React from 'react';
import BasicButton from '../BasicButton';
import { Upload } from 'react-feather';
import '../ButtonStyles.css';
import { useRef } from 'react';

//TUTORIAL: https://bobbyhadz.com/blog/react-open-file-input-on-button-click

const UploadButton = ({ onClick, inputRef }) => {

  //  const inputRef = useRef(null);
    const handleUploadClick = () => {
        //open file input box on click of another element
        inputRef.current.click();
    };

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        console.log('fileObj is', fileObj);

        //reset file input
        event.target.value = null;

        //is now empty
        console.log(event.target.files);

        //can still access file object here
        console.log(fileObj);
        console.log(fileObj.name);
    }

        return (
            <>
                <BasicButton
                    className='blackButton'
                    onClick={onClick}


                >
                    <Upload strokeWidth={3} size={34} />
                </BasicButton>
                {/*<input  type="file" id="file" />*/}
                <div>
                    <input
                        style={{ display: 'none' }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                    />

                    <button onClick={handleUploadClick}>Open file upload box</button>
                </div>

            </>

        )
    }


    export default UploadButton;