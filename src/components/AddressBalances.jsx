import React from 'react';
import { addressInfoLabels } from '../static_data/addressData';
import { parseCoinAmount } from '../utils/functions';

export default class AddressBalance extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className='address-info-container full-width flex wrap'>
        <p className='title main-color full-width'>Overview</p>
        {
          Object.keys(data).map(
            (AddressPropertyName, index) => {
              return (
                <div key={`address-property-${index}`} className='address-property-container flex-between wrap full-width'>
                  <p className='label five-color'>{addressInfoLabels[AddressPropertyName]}</p>
                  <p className='property-value five-color'>
                    {parseCoinAmount(data[AddressPropertyName])}
                  </p>
                </div>
              )
            })
        }
      </div>
    )
  }
}
