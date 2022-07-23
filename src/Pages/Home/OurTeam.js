import React from 'react';
import aven from '../../assets/images/teams/Aven.png'
import amara from '../../assets/images/teams/Amara.png'
import circle from '../../assets/images/teams/Circle.png'
import kyan from '../../assets/images/teams/Kyan.png'
import treva from '../../assets/images/teams/Treva.png'
const OurTeam = () => {
    return (
        <section className='my-32'>
            <h4 className='text-3xl font-semibold text-primary text-center'>5,000+ high-impact teams rely on Fieldx</h4>
            <div className='px-28 grid grid-cols-5 gap-24 mt-16'>
                <img src={aven} alt="" />
                <img src={amara} alt="" />
                <img src={circle} alt="" />
                <img src={kyan} alt="" />
                <img src={treva} alt="" />
            </div>
        </section>
    );
};

export default OurTeam;