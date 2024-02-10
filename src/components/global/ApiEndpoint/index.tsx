import React from 'react';

class ApiEndpoint extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { method, endpoint, description, info } = this.props;

        let backgroundColor = '#99e0b4';
        let methodBackgroundColor = '#1cd664';

        switch(method) {
            case 'GET':
                backgroundColor = '#99e0b4';
                methodBackgroundColor = '#1cd664';
                break;
            case 'POST':
                backgroundColor = '#e6bf8c';
                methodBackgroundColor = '#e38f30';
                break;
            case 'PATCH':
                backgroundColor = '#a9a9d4';
                methodBackgroundColor = '#5e5ed6';
                break;
            case 'DELETE':
                backgroundColor = '#d4a3aa';
                methodBackgroundColor = '#cc2d45';
                break;
        }
        return (
            <div>
                <div style={{
                    backgroundColor: backgroundColor,
                    color: 'white',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '5px',
                    border: '1px solid ' + methodBackgroundColor,
                    borderRadius: '5px',
                    marginBottom: '5px',
                }}>
                    <div style={{
                        height: '100%',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        backgroundColor: methodBackgroundColor,
                        display: 'inline',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        marginRight: '10px',
                    }}> { method } </div>
                    <span style={{
                        fontWeight: 'bold',
                        marginRight: '10px',
                    }}> { endpoint } </span>
                    <span>{ description }</span>
                </div>
            </div>
        );
    }
}

export default ApiEndpoint;
