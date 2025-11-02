import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-11/12 mx-auto py-2'>
                    <Navbar></Navbar>
                </section>
            </header>
            {/* <Nav></Nav> */}
            {/* <Main></Main> */}
        </div>
    );
};

export default HomeLayout;