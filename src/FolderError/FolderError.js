import React from 'react'



class FolderErr extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError: false
        }
    }
   

    static getDerivedStateFromError(){
        return {hasError: true};
    }

    render(){
        if (this.state.hasError){
            return(
                <h2>Could not add your Folder, something is wrong with the Display.</h2>
            );
        }
        return this.props.children;

    }
}

export default FolderErr