import React,{ Component} from 'react';
import { storageRef } from '../firebase';


class Upload extends Component{

    
    constructor(props){
        super(props);
        this.state = {
            images : null,
            //bytesTransfered:0
        }
        this.onchangefile = this.onchangefile.bind(this);
        this.onSubmitFile = this.onSubmitFile.bind(this);
    }
    onchangefile(e){
        const file = e.target.files[0];        
        this.setState({
            images:file
        })

        //console.log(file);
    }
    onSubmitFile(e){
        e.preventDefault();
        //const ref = storageRef.ref('images/');       
        var newfile = new Date().getTime();
        const extension = this.state.images.name.split('.').pop();
         newfile = newfile + '.'+extension;

       const spaceRef = storageRef.ref('images/'+newfile);
        //spaceRef.put(this.state.image);

        //console.log(e);
        const task = spaceRef.put(this.state.images);
        task.on('state_changed',
        function progress(snapshot){
            console.log(snapshot);
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //console.log(percentage);
            document.getElementById("uploader").value = percentage;
            document.getElementById("uploader").innerHTML= percentage;


        },
        function error(err){

        },
        function complete(){

        }

    )
        
        
    }

    render(){
        return (<div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button onClick={this.onSubmitFile} className="btn btn-outline-secondary" type="button">Button</button>
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" onChange={this.onchangefile} id="inputGroupFile03"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
                </div>
                </div>

            <progress value="0" max="100" id = "uploader">0%</progress>
            </div>);
    }
    uploadFile(){
        
    }
}
export default Upload;
