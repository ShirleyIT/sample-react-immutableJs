'use strict';

import React from 'react';
import cn from 'classNames';
import Immutable from 'immutable';

class CompChildComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.renderTimes = 0;
        this.state = {
            pProps: Immutable.Map(this.props)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(() => ({pProps: Immutable.Map(nextProps)}));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !Immutable.is(nextState.pProps, this.state.pProps);
    }

    render() {
        console.log('render complicated child component ...');
        this.renderTimes++;
        const data = this.state.pProps.toJS();
        return (
          <div className="button-container">
            <div className="panel panel-primary">
              <div className="panel-heading">
                Complicated child component
              </div>
              <div className="panel-body">
                <div className="pull-left">
                    Text: {data.text} <small>(value:{data.value})</small>
                </div>
                <div className="pull-right">
                    <span className="badge">
                        {this.renderTimes}
                    </span>
                </div>
                <div className="clearfix"/>
                <div className="row">
                    {
                        data.list.map(val => {
                            return (
                                <div key={val} className="col-xs-2">
                                    <span className="label label-info list-info">
                                        {val}
                                    </span>
                                </div>
                            );
                        })
                    }
                </div>
              </div>
            </div>
          </div>
        );
    }
}

CompChildComponent.propTypes = {
    text: React.PropTypes.string.isRequired,
    list: React.PropTypes.array.isRequired
};

export default CompChildComponent;
