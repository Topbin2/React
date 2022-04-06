import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';

const Page = () => {
  return (
    <div className='page'>
      <Header />
      <Input />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;