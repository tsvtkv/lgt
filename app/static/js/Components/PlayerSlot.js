/** @jsx React.DOM */

var Par = require('./Par.js');
var Row = require('./Row.js');
var CardChoice = require('./CardChoice.js');

var PlayerSlot = React.createClass({
    render: function() {
        var values = [
            <CardChoice type='left' slot={this.props.key} cards={this.props.cards} otherSlots={this.props.otherSlots} />,
            <Par text={this.props.slot.id}/>,
            <Par text={this.props.slot.term}/>,
            <Par text={this.props.slot.vitality}/>,
            <CardChoice type='right' slot={this.props.key} cards={this.props.cards} otherSlots={this.props.otherSlots} />,
        ];
        return (<Row values={values}/>);
    }
});

module.exports = PlayerSlot;