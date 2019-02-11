import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MUIList from '@material-ui/core/List';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {withStyles} from '@material-ui/core/styles';
import ListItem from './ListItem';

const styles = {
    list: {
        maxWidth: 600,
        margin: '0 auto'
    }
};
const List = ({onCheckItem, list, checkedItems, classes}) => {
    console.log(`${list.title} rendered`);
    const [expanded, setExpanded] = useState(false);
    return (
        <ExpansionPanel className={classes.list} onClick={() => setExpanded(true)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>{list.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <MUIList>
                    {expanded && list.items.map(item =>
                        <ListItem
                            checked={checkedItems[item.value] !== undefined}
                            onCheckItem={onCheckItem}
                            key={item.id}
                            item={item}/>
                    )}
                </MUIList>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
};


List.propTypes = {
    list: PropTypes.object.isRequired,
    checkedItems: PropTypes.object,
    onCheckItem: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(List);
