'use strict';

import React from 'react';
import cn from 'classNames';
import moment from 'moment';
import SimpleChildComponent from '../components/SimpleChildComponent';
import PureChildComponent from '../components/PureChildComponent';
import CompChildComponent from '../components/CompChildComponent';
import '../styles/demo.scss';

const randomInt = () => Math.floor(Math.random()*1e5);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format('YYYY-MM-DD hh:mm:ss'),
            sProps: {
                text: 'I\'m a simple component',
                value: 0
            },
            pProps: {
                text: 'I\'m a pure component',
                value: 1
            },
            cProps: {
                text: 'I\'m a complicated component',
                value: 2,
                list: [0]
            },
            enableChangeChildValue: false
        };
        this.renderTimes = 0;
    }

    onRenderAction() {
        if (this.state.enableChangeChildValue) {
            this.setState({
                time: moment().format('YYYY-MM-DD hh:mm:ss'),
                sProps: {
                    text: 'I\'m a simple component',
                    value: this.state.sProps.value + 1
                },
                pProps: {
                    text: 'I\'m a pure component',
                    value: this.state.pProps.value + 1
                },
                cProps: {
                    text: 'I\'m a complicated component',
                    value: this.state.cProps.value + 1,
                    list: [...this.state.cProps.list, +this.state.cProps.list.slice(-1) + 1]
                }
            });
        } else {
            this.setState({
                time: moment().format('YYYY-MM-DD hh:mm:ss')
            });
        }
    }

    onChangeChildValueAction(e) {
        this.setState({
            enableChangeChildValue: !this.state.enableChangeChildValue
        });
    }

    render() {
        console.log("Rander parent");
        this.renderTimes++;
        return (
          <div className="container sample-container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="pull-left">
                        <button 
                            type="button" 
                            className="btn btn-default" 
                            onClick={() => this.onRenderAction()}>
                            Re-render Parent
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="checkbox-container" onClick={e => this.onChangeChildValueAction(e)} >
                            <input type="checkbox" checked={this.state.enableChangeChildValue} />
                            &nbsp;Change value
                        </span>
                    </div>
                    <div className="pull-right">
                        Render time: 
                        <small>{this.state.time}</small>
                        &nbsp;
                        <span className="badge">
                            {this.renderTimes}
                        </span>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="col-xs-12">
                    <SimpleChildComponent 
                        {...this.state.sProps}
                    />
                    <PureChildComponent 
                        {...this.state.pProps}
                    />
                    <CompChildComponent 
                        {...this.state.cProps}
                    />
                </div>
            </div>
          </div>
        );
    }
}

export default App;
