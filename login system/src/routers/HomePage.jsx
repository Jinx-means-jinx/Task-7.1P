import React from 'react'
import Header from '../Header'
import Image from '../Image'
import Top from '../Top'
import FreelancerList from '../FreelancerList';
import Button from '../Button';
import CustomerList from '../CustomerList';
import Email from '../Email';
import Footer from '../Footer';

function HomePage() {
  return (
    
    <div>  
      <Header/>
      <Image />
      <Top text = "Featured Freelancers"/>
      <FreelancerList />
      <Button text = "See more" type = 'submit'/>
      <Top text = "Featured Customers"/>
      <CustomerList />
      <Button text = "See all customers" type = 'submit'/>
      <Email />
      <Footer /> 
    </div>
  );
}

export default HomePage;