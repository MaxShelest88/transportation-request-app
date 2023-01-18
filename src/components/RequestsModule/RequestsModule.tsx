import React from 'react';
import Split from 'react-split';
import { selectRequests } from '../../redux/requests/selectors';
import MapComponent from '../MapComponent/MapComponent';
import RequestsList from '../RequestsList/RequestsList';
import { useSelector } from 'react-redux';
import { points } from '../../data/data';
import { useWindowSize } from 'usehooks-ts';
import { Size } from '../../hooks/useWindowSize';

const RequestsModule: React.FC = () => {
  const data = useSelector(selectRequests);
  const size: Size = useWindowSize();
  const sizeWindth = size.width ? size.width : window.innerWidth;

  return (
    <Split
      className="split-wrapper"
      sizes={sizeWindth > 768 ? [40, 60] : [50, 50]}
      minSize={200}
      expandToMin={false}
      gutterSize={5}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction={sizeWindth > 768 ? 'horizontal' : 'vertical'}
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
