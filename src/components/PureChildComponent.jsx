'use strict';

import React from 'react';
import cn from 'classNames';

class PureChildComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renderTimes = 0;
    }

    render() {
        console.log('render pure child component ...');
        this.renderTimes++;
        return (
          <div className="button-container">
            <div className="panel panel-warning">
              <div className="panel-heading">
                Pure child component
              </div>
              <div className="panel-body">
                <div className="pull-left">
                    Text: {this.props.text} <small>(value:{this.props.value})</small>
                </div>
                <div className="pull-right">
                    <span className="badge">
                        {this.renderTimes}
                    </span>
                </div>
                <div className="clearfix"/>
              </div>
            </div>
          </div>
        );
    }
}

PureChildComponent.propTypes = {
    text: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired
}

export default PureChildComponent;
