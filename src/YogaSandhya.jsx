import React from 'react';
// import banner from './YogaSandhyaBanner02.png'
const YogaSandhya = ({location,footnote,programName,programdescription,time,backCover}) => {
  return (
    <div
      style={{
        // backgroundImage: `url(${banner})`,
        backgroundImage: `url(${backCover.url})`,
        backgroundSize: '1330px 606px',
        backgroundRepeat: 'no-repeat',
        width: '1330px',
        height: '606px',
        display: 'flex',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '20px',
          color: 'white',
        }}
      >
        <div style={{ fontSize: '50px', color: 'white', fontfamily: 'sans-serif', marginBottom: '-20px' }}>
          <b>{programName}</b></div>
        <div style={{ fontSize: '35px', color: '#ffc266', fontfamily: 'Fedra Serif A Pro', marginBottom: '60px' }}>{programdescription}</div>
        <div style={{ fontSize: '35px', color: '#ff9900', marginBottom: '-20px'  }}>{time}</div>
        <div style={{ fontSize: '20px', color: 'white', marginBottom: '10px'  }}>{location}</div>
        <button style={{ marginTop: '20px',height: '60px', width : '200px', fontSize: '16px', backgroundColor: '#ffb84d', borderRadius: '8px' }}>Register</button>
        <div style={{ fontSize: '12px', color: 'white', marginBottom: '150px' }}><i>{footnote}</i></div>
      </div>
    </div>
  );
};

export default YogaSandhya;
