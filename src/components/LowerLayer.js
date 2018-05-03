import React from 'react';
import LayerBottom from './LayerBottom';
import ContentWrap from './ContentWrap';
import BottomBody from './BottomBody';
import BottomTitle from './BottomTitle';
import Img from './Img';

class LowerLayer extends React.Component {
    render() {
        return (
            <LayerBottom>
                <ContentWrap>
                    <BottomBody>
                        <BottomTitle>{this.props.title}</BottomTitle>
                        <p>{this.props.text}</p>
                    </BottomBody>
                    <Img src={this.props.src}/>
                </ContentWrap>
            </LayerBottom>
        );
    }
}

export default LowerLayer;