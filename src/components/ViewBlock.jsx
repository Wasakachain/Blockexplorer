import React from 'react';

export default class ViewBlock extends React.Component {
  render() {
    const {
      title,
      secundaryTitle,
      icon
    } = this.props
    return (
      <div className='single-block-container main-background flex-between'>
        <div className='icon-container'>
          <img src={icon} alt={title} />
        </div>
        <div className='info-container flex-between'>
          <div className='block-info'>
            <p className='label'>{title}</p>
            <p className='value'>12412124wsa</p>
          </div>
          {
            secundaryTitle && (
              <div className='block-info right'>
                <p className='label'>{secundaryTitle}</p>
                <p className='value'>12412124wsa</p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
