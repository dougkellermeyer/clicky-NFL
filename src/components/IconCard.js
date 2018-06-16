import React from 'react';
import Image from './Image'
class IconCard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            key: this.props.id,
            name: this.props.icon,
            selected: this.props.selected
        };
    }
    componentDidMount(){
        console.log(this.props.id, this.props.icon, this.props.selected, this.props.counterCheck);
    }

    render(){
        return(
            <div onClick={()=>this.props.counterCheck(this.props.icon,this.props.selected)} className={"icons"}>
                <Image imgSrc={this.props.icon} />
            </div>
        )
    }

}

export default IconCard