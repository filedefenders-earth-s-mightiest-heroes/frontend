import React from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

export default class Upload extends React.Component{
    render(){
        return (
            <form>
                <input type="text" placeholder="Search or scan a file, URL" name="search-textbox" model="searchTerm"/>
                <div class="file-upload" ngf-multiple="false" ngf-model="file" ngf-select="uploadFile($files)">

                </div>
                <button type="submit">Analyze</button>
                <FilePond allowMultiple={true}/>
            </form>

        );
    };
}

