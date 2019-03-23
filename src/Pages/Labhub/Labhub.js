import React from 'react';
import './Labhub.scss';
import video from './../../img/Cieling_Flames_4K_Motion_Background_Loop (1).mp4';
import ScalingSquaresSpinner from '@bit/bondz.react-epic-spinners.scaling-squares-spinner';
import Grid from "@bit/mui-org.material-ui.grid";
import Card from '../../Components/Card/Card';
import microscope from '../../img/microscope.svg';
import TopMenu from '../../Components/TopMenu/TopMenu';




function Labhub() {

    return (
        <>

<video autoPlay muted loop id="myVideo">
  <source src={video} type="video/mp4"/>
</video>

<div className="content">
<TopMenu/>
  <h1>Lab Hub</h1>
  <p>Research and Development </p>
  <ScalingSquaresSpinner
	color='#ffffff'
    size={100}
    className='spiner'
	/>

  {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}
</div>
<div className="container-blocks">
<Grid container spacing={24}>
<Grid item xs={4}>
<Card src={microscope} title="Lab 1" text="The Start of Human Life"></Card>
</Grid>
<Grid item xs={4}>
<Card src={microscope} title="Lab 2" text="Blocked"></Card>
</Grid>
<Grid item xs={4}>
<Card src={microscope} title="Lab 3" text="Blocked"></Card>
</Grid>
</Grid>

</div>
        </>
    )
}

export default Labhub;