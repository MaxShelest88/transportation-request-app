import RequestsList from './components/RequestsList/RequestsList';
import Split from 'react-split';
import MapComponent from './components/MapComponent/MapComponent';

import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Split className='split-wrapper'
          sizes={[50, 50]}
          minSize={200}
          expandToMin={false}
          gutterSize={5}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal">
          <RequestsList />
          <MapComponent />
        </Split>
      </div>
    </div>
  );
}

export default App;
