import logo from './logo.svg';
import { useQuery } from "graphql-hooks";
import SadhguruDemoCard from './SadhguruDemoCard';
import YogaSandhya from './YogaSandhya';
import './SadhguruDemoCard.css';
import './App.css';

// const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
//   allBlogPosts(first: $limit) {
//     title
//   }
// }`;

const CardQuery = `query {
  sadhguruDemoCard {
    videoDesc
    heading
    date
    videoIcon {
      url
    }
    shareIcon {
      alt
      url
      video {
        thumbnailUrl
      }
    }
    sadhguruPic {
      url
      filename
      alt
    }
  }
}`;

const YogaSandhyaQuery = `query {
  yogasandhyaModel {
    yogaSandhyaModulerContent {
      location
      footnote
      programName
      programdescription
      time
      backCover {
        url
      }
    }
  }
}`;

function App() {

  // const { loading, error, data } = useQuery(CardQuery, {
  //   variables: {
  //     limit: 10
  //   }
  // });

  const { loading, error, data } = useQuery(YogaSandhyaQuery, {
    variables: {
      limit: 10
    }
  });

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return(
  <div className="App">
    {/* {JSON.stringify(data)} */}
    {/* {JSON.stringify(data.yogasandhyaModel)} */}
    {/* {JSON.stringify(data.yogasandhyaModel.yogaSandhyaModulerContent[0])} */}
    {/* <SadhguruDemoCard {...data.sadhguruDemoCard} /> */}
    <YogaSandhya {...data.yogasandhyaModel.yogaSandhyaModulerContent[0]}/>
  </div>
  )
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
