import React from 'react';
import SkewedLayerTop from './SkewedLayerTop';
import SkewedTopContentWrap from './SkewedTopContentWrap';
import TopBody from './TopBody';
import Title from './Title';
import Img from './Img';

class TopLayer extends React.Component {
    render() {
        const SkewedDegree = (prop) => {
            if(prop < 0) {
                prop =  Math.abs(prop);
            } else {
                prop = -Math.abs(prop);
            }
            return 'skew('+ prop +'deg)';
        };

        return (
            <SkewedLayerTop width={this.props.layerWidth} transform={SkewedDegree(this.props.degree)}>
                <SkewedTopContentWrap transform={'skew('+ this.props.degree +'deg)'}>
                    <TopBody>
                        <Title>{this.props.title}</Title>
                        <p>{this.props.text}</p>
                    </TopBody>
                    <Img src={this.props.src} />
                </SkewedTopContentWrap>
            </SkewedLayerTop>
        );
    }
}

export default TopLayer;