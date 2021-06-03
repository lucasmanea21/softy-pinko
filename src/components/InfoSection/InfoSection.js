import React from 'react'
import {infoData} from '../Data'
import {infoData2} from '../Data'
import Info from './Info'

const InfoSection = () => {
    const data = infoData.map((item,index) => (
        <Info {...item} imgStart={true}/>
      ))
    const data2 = infoData2.map((item,index) => (
        <Info {...item} imgStart={false}/>
      ))
    return (
        <React.Fragment>
            {data}
            <hr style={{width: '80%', backgroundColor: '#c9c9c9', height: '1px',border: 'none', marginTop: '50px', marginBottom: '50px'}}/>
            {data2}
        </React.Fragment>
    )
}

export default InfoSection
