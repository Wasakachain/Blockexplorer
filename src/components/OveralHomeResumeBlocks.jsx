import React from 'react';
import { blocksTitles } from '../static_data/homeData';
import HomeResumeBlock from '../containers/HomeResumeBlockContainer';

export default class OveralHomeResumeBlocks extends React.Component {
  render() {
    return (
      <div className='blocks-container flex-between wrap'>
        {
          blocksTitles.map((blockIcon, index) => {
            return <HomeResumeBlock {...blockIcon} key={`view-blocl-${index}`} />
          })
        }
      </div>
    )
  }
}
