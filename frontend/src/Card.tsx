import React from 'react';
class Card extends React.Component <{school:string; city:string; state:string; mascot:string;}> {
    render() {
        const team = this.props;
        return (
            <div className="Card">
                <h2>{team.school}</h2>
                <h4>Mascot: {team.mascot}</h4>
                <h4>Location: {team.city}, {team.state}</h4>
            </div>
        );
    }
}

export default Card;