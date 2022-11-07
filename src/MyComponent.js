import {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    render(){
        const {name, fn, children}= this.props;
            return(
                <div>나의 새롭고 멋진{name}<br/>children값은 {children }<br/>제일 좋아하는 숫자{fn}</div>
            );
             
    }
}

MyComponent.defaultProps ={
    name : "기본이름"
};

MyComponent.propTypes ={
    name : PropTypes.string,
    fn : PropTypes.number.isRequired
};

export default MyComponent;