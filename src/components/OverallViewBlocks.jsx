import React from 'react';
import { blocksTitles } from '../static_data/homeData';
import ViewBlock from '../containers/ViewBlockContainer';

export default class OverallViewBlocks extends React.Component {
  render() {
    return (
      <div className='blocks-container flex-between wrap'>
        {
          blocksTitles.map((blockIcon, index) => {
            return <ViewBlock {...blockIcon} key={`view-blocl-${index}`} />
          })
        }
      </div>
    )
  }
}
