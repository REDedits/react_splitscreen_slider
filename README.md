# React Split Screen Slider
This component using [React](https://reactjs.org/) and [Styled-Components](https://www.styled-components.com/) takes two images and layers them. The Slider aligns with the position of the mouse on the x axis adding or removing the top layer creating the split screen effect. In this example an artist rendering is used to show a before and after coloring of an image.

```
<SplitSlider
	BottomLayerTitle={'input bottom layer title'}
	BottomLayerText={'input bottom layer body text'}
	BottomLayerSrc={'bottom layer image url'}
	TopLayerTitle={'input top layer title'}
	TopLayerText={'input top layer text'}
	TopLayerSrc={'top layer image url'}
	handleColor={'input color hexcode or string'}
	handleRotation={33} /> // input a number from -45 to 45 degrees for the angle of the slider.
```
The React Component is customizable giving the user the ability to change the angle of the slider as well as change header and text content on either side. The component is also responsive and can be used as either a hero image or multiple instances as a gallery.

![screen shot example of React Split Screen Slider](http://www.rededits.com/assets/img/reactsplitscreenslider.png)
