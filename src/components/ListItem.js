import React from 'react';
import PropTypes from 'prop-types';
import MUIListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ListItem = ({onCheckItem, item, checked}) => {
    console.log(`${item.value} rendered`);
    return (
        <MUIListItem>
            <FormControlLabel control={
                <Checkbox onChange={onCheckItem} checked={checked} value={item.value}/>
            } label={item.name}/>
        </MUIListItem>
    )
};

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
    checked: PropTypes.bool
};
export default ListItem;
