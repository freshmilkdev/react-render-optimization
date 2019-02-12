import React from 'react';
import List from './List';

const createFakeDataSource = (listCount = 10, listItemCount = 10) => {
    let data = [];
    for (let i = 1; i <= listCount; i++) {
        let list = {};
        list.title = `List ${i}`;
        list.id = `list${i}`;
        list.items = [];
        for (let j = 1; j <= listItemCount; j++) {
            list.items.push({
                id: `listItem${i}${j}`,
                name: `List Item ${j}`,
                value: `listItem${i}${j}`
            });
        }
        data.push(list);
    }
    return data;
};

class ListContainer extends React.Component {
    state = {
        checkedItems: {},
        source: createFakeDataSource()
    };
    handleCheckItem = (e) => {
        let {checkedItems} = this.state;
        let {value} = e.target;
        if (checkedItems[value] === undefined) {
            checkedItems[value] = value;
        } else {
            delete checkedItems[value];
        }

        this.setState({checkedItems});
    };

    render() {
        return <React.Fragment>
            {
                this.state.source.map(list =>
                    <List
                        checkedItems={this.state.checkedItems}
                        onCheckItem={this.handleCheckItem}
                        key={list.id}
                        list={list}/>)
            }
        </React.Fragment>
    }
};

export default ListContainer;