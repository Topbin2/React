import React from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

const Page = ({isDark, setIsDark }) => {
    return (
        <div className='page'>
            <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </div>
    );
};

export default Page;