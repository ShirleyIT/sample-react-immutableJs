'use strict';

import React from 'react';
import cn from 'classNames';

class SimpleChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.renderTimes = 0;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
        // return this.props.text !== nextProps.text || this.props.value !== nextProps.value;
    }

    render() {
        console.log('render simple child component ...');
        this.renderTimes++;
        return (
          <div className="button-container">
            <div className="panel panel-default">
              <div className="panel-heading">
                Simple child component
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

SimpleChildComponent.propTypes = {
    text: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired
}

export default SimpleChildComponent;
