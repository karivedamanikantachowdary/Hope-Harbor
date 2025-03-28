import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export function Footer() {
  return (
    <MDBFooter bgColor='white' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='http://localhost:3000/'>
          hopeharbor.com
        </a>
      </div>
    </MDBFooter>
  );
}