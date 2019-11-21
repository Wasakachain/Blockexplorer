import React from 'react';
import { Link } from 'react-router-dom';
import { blocksProperties, tableHeader } from '../static_data/blockData';
import { getDifferenceFromNow, parseHashToShow } from '../utils/functions';
import './css/BlocksList.css';

export default class BlocksList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className='blocks-list-wrapper full-width flex wrap'>
        <div className='blocks-table-container full-width flex wrap'>
          <div className='table-header flex-center full-width'>
            {
              tableHeader.map((label, index) => {
                return (
                  <p key={`table-header-${index}`} className='header-label five-color'>{label}</p>
                )
              })
            }
          </div>
          <div className='blocks-list-container flex full-width'>
            <div className='list-scroll-container flex full-width wrap'>
              {
                Object.keys(data).map(blockIndex => {
                  return (
                    <div key={`block-${blockIndex}`} className='block-element-container full-width flex-between'>
                      {
                        blocksProperties.map(({ property, baseUrl }, index) => {
                          if (baseUrl) {
                            return (
                              <Link
                                key={`block-property-${index}`}
                                className={`block-property${property === 'index' || property === 'minedBy' ? ' main-color' : ' five-color'}`}
                                to={`${baseUrl}${data[blockIndex][property]}`}
                              >
                                <p className='overflow-ellipsis'>{property === 'minedBy' ? parseHashToShow(data[blockIndex][property]) : data[blockIndex][property]}</p>
                              </Link>
                            );
                          }
                          return (
                            <p key={`block-property-${index}`} className='overflow-ellipsis block-property five-color'>{
                              property === 'dateCreated' ?
                                getDifferenceFromNow(data[blockIndex][property]) :
                                property === 'blockDataHash' || property === 'blockHash' ?
                                  parseHashToShow(data[blockIndex][property]) :
                                  data[blockIndex][property]
                            }
                            </p>
                          );
                        })
                      }
                      <Link className='block-property main-color' to={`/block/transactions/${blockIndex}`}>
                        <p>View</p>
                      </Link>
                    </div>
                  );
                })
              }

            </div>
          </div>
        </div>
      </div>
    )
  }
}
