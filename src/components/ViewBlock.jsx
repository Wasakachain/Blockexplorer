import React from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';

export default class ViewBlock extends React.Component {
  requestInfo() {
    const { method, objectIndentificator, data } = this.props;
    if (method && objectIndentificator && !Object.keys(data).length > 0) {
      if (typeof objectIndentificator === 'number') {
        return this.props[method](objectIndentificator - 1);
      }
      return this.props[method](objectIndentificator);
    }
  }

  componentDidMount() {
    this.requestInfo();
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
      objectIndentificator
    } = this.props;
    return (
      <div className='single-block-container main-background flex-between'>
        <div className='icon-container'>
          <img src={icon} alt={title} />
        </div>
        {
          Object.keys(data).length ? (
            <div className='info-container flex-between'>
              <div className='block-info full-width'>
                <p className='label'>{title}</p>
                {
                  link ? (
                    <Link to={`${link}${objectIndentificator}`} className='value'>
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
