import React from 'react';
import Content from './Content';

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