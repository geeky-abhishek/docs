import React from 'react';

class InfoCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        const { info } = this.props;

        return <div style={{
            backgroundColor: '#0494c4',
            border: '1px solid #078cb8',
            borderRadius: '5px',
            verticalAlign: 'top',
            paddingBottom: '5px',
        }}>
            <div>
                <img src='/icons/information.png' style={{
                    width: '25px',
                    height: '25px',
                    display: 'inline',
                    margin: '10px',
                }}/>
            </div>
            <p style={{
                color: 'white',
                paddingLeft: '30px',
            }}>
                { info }
            </p>
        </div>
    }
}

export default InfoCard;
