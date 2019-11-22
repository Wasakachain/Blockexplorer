import React from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';

export default class HomeResumeBlock extends React.Component {
  requestInfo() {
    const { method, objectIdentificator, data } = this.props;
    if (method && objectIdentificator && !Object.keys(data).length > 0) {
      return this.props[method](objectIdentificator);
    }
  }

  componentDidUpdate() {
    const { data, loading } = this.props;
    if (!Object.keys(data).length > 0 && !loading) {
      // this.requestInfo();
    }
  }

  render() {
    const {
      title,
      secundaryTitle,
      icon,
      data,
      keyToShow,
      label,
      secundaryKeyToShow,
      link,
      objectIdentificator,
      loading
    } = this.props;
    return (
      <div className='single-block-container main-background flex-between'>
        <div className='icon-container'>
          <img src={icon} alt={title} />
        </div>
        {
          !loading ? (
            <div className='info-container flex-between'>
              <div className='block-info full-width'>
                <p className='label'>{title}</p>
                {
                  link ? (
                    <Link to={`${link}${objectIdentificator}`} className='value'>
                      <p className='overflow-ellipsis'>{label ? `${label}: ${data[keyToShow]}` : `${data[keyToShow]}`}</p>
                    </Link>
                  ) : (
                      <p className='value overflow-ellipsis'>{label ? `${label}: ${data[keyToShow]}` : `${data[keyToShow]}`}</p>
                    )
                }
              </div>
              {
                secundaryTitle && (
                  <div className='block-info right'>
                    <p className='label'>{secundaryTitle}</p>
                    <p className='value overflow-ellipsis'>{data[secundaryKeyToShow]}</p>
                  </div>
                )
              }
            </div>
          ) : (
              <Loader className='secundary-color-loader' />
            )
        }
      </div>
    )
  }
}
