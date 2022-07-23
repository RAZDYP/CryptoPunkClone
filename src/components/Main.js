import React from 'react'
import { useState, useEffect } from 'react'
import './Main.css'
const instagramLogo = require('../assets/owner/instagram.png');
const twitterLogo = require('../assets/owner/twitter.png');
const moreIcon = require('../assets/owner/more.png');



const Main = ({ selectedPunk, punkListData }) => {

    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])


    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img className='selectedPunk'
                            src={activePunk?.image_original_url}

                        />
                    </div>
                </div>
                <div className='noisy'>
                    <div className='punkDetails' style={{ color: '#fff' }}>
                        <span className='title'>{activePunk.name}.#{activePunk.token_id}</span>
                        {/* <span className='itemNumber'>.#{activePunk.token_id}</span> */}

                    </div>
                    <div className='owner'>
                        <div className="ownermain">
                            <div className='ownerImageContainer'>
                                <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHRcsh6JYwAjQ/profile-displayphoto-shrink_800_800/0/1643114995244?e=1661385600&v=beta&t=yNY_ByBMzmyQgw-CGK-SRRBmImy61MhuDeddNb_gmB0' />
                            </div>
                            <div className='ownerDetails'>
                                <div className='ownerNameAndHandle'>
                                    <div className='ownerAddress'>{activePunk.owner.address}</div>
                                    <div className='ownerHandle'> @razdyp </div>
                                </div>
                            </div>
                        </div>
                        <div className='extradetails'>
                            <div className='ownerLink'>
                                <img src={instagramLogo} />
                            </div>
                            <div className='ownerLink'>
                                <img src={twitterLogo} />
                            </div>
                            <div className='ownerLink'>
                                <img src={moreIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main