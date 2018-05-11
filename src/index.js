import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SplitSlider from './SplitSlider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SplitSlider
    BottomLayerTitle={'Captain America'}
    BottomLayerText={'Colored by Ruben J DelValle'}
    BottomLayerSrc={'http://www.rededits.com/projects/images/rjd_art/capamerica_colored_rjd.jpg'}
    TopLayerTitle={'B/W Captain America'}
    TopLayerText={'Inked by Ruben J DelValle'}
    TopLayerSrc={'http://www.rededits.com/projects/images/rjd_art/capamerica_inked_rjd.jpg'}
    handleColor={'black'}
    handleRotation={0} />, document.getElementById('root'));
registerServiceWorker();
