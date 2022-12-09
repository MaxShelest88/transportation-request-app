import React from 'react';
import Split from 'react-split';
import { selectRequests } from '../../redux/requests/selectors';
import MapComponent from '../MapComponent/MapComponent';
import RequestsList from '../RequestsList/RequestsList';
import { useSelector } from 'react-redux';
import { points } from '../../data/data';

const RequestsModule = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.screen.width);

  React.useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };
    return () => {
      window.onresize = false;
    };
  }, [windowWidth]);

  const data = useSelector(selectRequests);

  return (
    <Split
      className="split-wrapper"
      sizes={windowWidth > 768 ? [40, 60] : [50, 50]}
      minSize={200}
      expandToMin={false}
      gutterSize={5}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction={windowWidth > 768 ? 'horizontal' : 'vertical'}
    >
      <RequestsList
        data={data}
        cities={points}
      />
      <MapComponent />
    </Split>
  );
};

export default RequestsModule;
