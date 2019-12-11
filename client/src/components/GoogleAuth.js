import React from 'react';

class GoogleAuth extends React.Component{

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '507360827730-1d1hck2rrdoh15h1bja1h15c1362vfep.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render(){
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;