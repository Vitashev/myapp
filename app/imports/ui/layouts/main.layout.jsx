import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

export const MainLayout = ({
  content, title, metaInfo, linkInfo
}) => {

  DocHead.setTitle(title || 'Default Title');
  DocHead.addMeta(metaInfo || {
    name: 'description',
    content: 'Default Description'
  });
  //DocHead.addLink(linkInfo || {rel: "icon", type: "image/png", href: "/icon.png"});

  return (

    <div className="main-layout">



    <Navbar/>

  <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 m12">
          {content}
        </div>
      </div>

    </div>
  </div>

  <Footer/>

    </div>

  )
}