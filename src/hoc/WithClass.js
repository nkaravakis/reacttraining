import React, {Component} from 'react';

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component { //no name after "class" because its an anonymous class
        render () {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
                </div>
            )
        }
    }
    return React.forwardRef((props, ref) => { //this is whatever `props` are being passed into Person component and whatever refs are being passed in via Persons. It forwards it to the underlying wrapped component 
        return <WithClass {...props} forwardedRef={ref}/>;
    })
}

export default withClass;