import React, {useState} from 'react'


function App() {
    return (
      <div>
      <div className="card" draggable="true">
        <div className="container draggable" draggable="true">
          <img className="profile-img" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/36b1dc7940733.560b48e127150.jpg" alt="John" />
          <div className="card-side-info">
            <hr className="top-badge-color" />
            <p className="essential non-essential">ESSENTIAL</p>
            <p>Date Issued: 1/1/2020</p>
            <p>Expiration: 1/1/2026</p>
            <hr className="top-badge-color" />
            {/* <p>Contractor</p>
        <p>HIGROUP, LLC Affiliate</p> */}
          </div>
        </div>
        <h1 className="profile-name">Hellstrom, Anton</h1>
        <p className="title">HIGROUP, LLC.</p>
        <p>PRIMARY ADJUNCT</p>
        <p>UNIMATRIX 001</p>
        <div className="grid-container container">
          <div className="access-escort-1 draggable-1 select-fade container" draggable="true">1</div>
          <div className="access-escort-2 draggable-1 select-fade" draggable="true">2</div>
          <div className="access-escort-3 draggable-1 select-fade" draggable="true">3</div>
          <div className="access-escort-4 draggable-1 select-fade" draggable="true">4</div>
          <div className="access-escort-5 draggable-1 select-fade" draggable="true">5</div>
          <div className="access-escort-6 draggable-1 select-fade" draggable="true">6</div>
          <div className="access-escort-7 draggable-1 select-fade" draggable="true">7</div>
          <div className="access-escort-8 draggable-1 select-fade" draggable="true">8</div>
        </div>
        <div className="grid-container-1 access-groups container" draggable="true">
          <i className="fa fa-ship draggable-1 select-fade" draggable="true" />
          <i className="fa fa-cog draggable-1 select-fade" draggable="true" />
          <i className="fa fa-area-chart draggable-1 select-fade" draggable="true" />
          <i className="fa fa-address-card draggable-1 select-fade" draggable="true" />
          <i className="fa fa-globe draggable-1 select-fade" draggable="true" />
          <i className="fa fa-institution draggable-1 select-fade" draggable="true" />
          <i className="fa fa-money draggable-1 select-fade" draggable="true" />
          <i className="fa fa-users draggable-1 select-fade" draggable="true" />
          <i className="fa fa-user-plus draggable-1 select-fade" draggable="true" />
          <i className="fa fa-strikethrough draggable-1 select-fade" draggable="true" />
          <i className="fa fa-lock draggable-1 select-fade" draggable="true" />
          <i className="fa fa-id-card draggable-1 select-fade" draggable="true" />
          <i className="fa fa-heartbeat draggable-1 select-fade" draggable="true" />
          <i className="fa fa-floppy-o draggable-1 select-fade" draggable="true" />
          <i className="fa fa-cubes draggable-1 select-fade" draggable="true" />
          <i className="fa fa-code-fork draggable-1 select-fade" draggable="true" />
        </div>
        <hr className="badge-color draggable-1 select-fade" draggable="true" />
      </div>
      <div className="card" draggable="true">
        <div className="container draggable" draggable="true">
          <img className="profile-img" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/36b1dc7940733.560b48e127150.jpg" alt="John" />
          <div className="card-side-info">
            <hr className="top-badge-color" />
            <p className="essential non-essential">ESSENTIAL</p>
            <p>Date Issued: 1/1/2020</p>
            <p>Expiration: 1/1/2026</p>
            <hr className="top-badge-color" />
            {/* <p>Contractor</p>
        <p>HIGROUP, LLC Affiliate</p> */}
          </div>
        </div>
        <h1 className="profile-name">Hellstrom, Anton</h1>
        <p className="title">HIGROUP, LLC.</p>
        <p>PRIMARY ADJUNCT</p>
        <p>UNIMATRIX 001</p>
        <div className="grid-container container">
          <div className="access-escort-1 draggable-1 select-fade container" draggable="true">1</div>
          <div className="access-escort-2 draggable-1 select-fade" draggable="true">2</div>
          <div className="access-escort-3 draggable-1 select-fade" draggable="true">3</div>
          <div className="access-escort-4 draggable-1 select-fade" draggable="true">4</div>
          <div className="access-escort-5 draggable-1 select-fade" draggable="true">5</div>
          <div className="access-escort-6 draggable-1 select-fade" draggable="true">6</div>
          <div className="access-escort-7 draggable-1 select-fade" draggable="true">7</div>
          <div className="access-escort-8 draggable-1 select-fade" draggable="true">8</div>
        </div>
        <div className="grid-container-1 access-groups container" draggable="true">
        </div>
        <div className="container">
          <section className="container">
            <hr className="badge-color draggable-1 select-fade" draggable="true" />
          </section>
        </div>
      </div>
      {/* <div class="container">
      <div class="container">
      <div class="card-2 drag-badge">
        <p class="container draggable-2 select-fade" draggable="true">1</p>
        <p class="container draggable-2 select-fade" draggable="true">2</p>
      </div> */}
    </div>
    )
    
  }