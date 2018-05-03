import React from 'react';
import Wrapper from './components/Wrapper';
import LowerLayer from './components/LowerLayer';
import TopLayer from './components/TopLayer';
import SkewedHandle from './components/SkewedHandle';

class SplitSlider extends React.Component {
    constructor(props){
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, delta: 0, skew: 1000, layerWidth: 50, handle: 50 + '%' };
    }

    handleMouseMove(event) {
        let delta = ( event.clientX - window.innerWidth / 2) * 0.5;
        this.setState({
            delta: delta,
            layerWidth: event.clientX + this.state.skew + delta + "px",
            handle: event.clientX + delta + 'px'
        });
    }

    handleDegrees(degr) {
        if (degr >= 45) {
            degr = 45;
        } else if (degr <= -45) {
            degr = -45;
        }

        return 'rotate('+ degr + 'deg) ' + 'translateY(-50%)';
    };

    render() {

        return (
            <Wrapper onMouseMove={this.handleMouseMove}>
                <LowerLayer
                    title={this.props.BottomLayerTitle}
                    text={this.props.BottomLayerText}
                    src={this.props.BottomLayerSrc}/>
                <TopLayer layerWidth={this.state.layerWidth}
                          title={this.props.TopLayerTitle}
                          text={this.props.TopLayerText}
                          src={this.props.TopLayerSrc}
                          degree={this.props.handleRotation} />
                <SkewedHandle left={this.state.handle} background={this.props.handleColor} transform={this.handleDegrees(this.props.handleRotation)} />
            </Wrapper>
        );
    }
}

export default SplitSlider;