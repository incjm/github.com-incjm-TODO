import React from 'react';
import './ListBody.css';
import arrows from '../Images/arrows.png';
import whitePencil from '../Images/whitePencil.png';
import whiteTrash from '../Images/whiteTrash.png';


class ListBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    del = event => {
        let trash = event.target.getAttribute('trash');
        console.log(trash);//id trash
      
    }

    trash = (e) => {
        const  trash = this.state.items.length + 1
        console.log(trash)
    }
    
       render() {
        return (
            <tbody className="tbody">{this.props.items.map(item => (
                <tr className="new-row"key={item.id}>
                    <td></td>
                    <td>
                    {item.myInput}
                    </td>
                    <td colSpan="2">
                        <div className="visual">
                            <div className="line">
                                <img src={arrows} className="" alt="" />
                            </div>
                            <div className="line">
                                <img src={whitePencil} className="" alt="" />
                            </div>
                            <div className="line">
                                <img src={whiteTrash} className="" alt="" onClick={this.del} trash={item.trash} />
                            </div>
                        </div>
                    </td>
                </tr>))}
            </tbody>
        )
    }
}    

export default ListBody;