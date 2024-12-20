import * as React from 'react';
import { sortBy } from 'lodash';

type Story = {
    objectID: string;
    url: string;
    title: string;
    author: string;
    num_comments: number;
    points: number;
};

type Stories = Array<Story>;

type ItemProps = {
    item: Story;
    onRemoveItem: (item: Story) => void;
};

type ListProps = {
    list: Stories;
    onRemoveItem: (item: Story) => void;
};

const SORTS = {
    NONE: (list: Stories) => list,
    TITLE: (list: Stories) => sortBy(list, 'title'),
    AUTHOR: (list: Stories) => sortBy(list, 'author'),
    COMMENT: (list: Stories) => sortBy(list, 'num_comments').reverse(),
    POINT: (list: Stories) => sortBy(list, 'points').reverse(),
};


const List = ({ list, onRemoveItem }: ListProps) => {

    const [sort, setSort] = React.useState({
        sortKey: 'NONE',
        isReverse: false,
    });

    const handleSort = (sortKey: string) => {

        const isReverse = sort.sortKey === sortKey && !sort.isReverse;

        setSort({ sortKey, isReverse });
    };

    const sortFunction = SORTS[sort.sortKey];

    const sortedList = sort.isReverse
        ? sortFunction(list).reverse()
        : sortFunction(list);

    return (
        <ul>
            <li style={{ display: 'flex' }}>
                <span style={{ width: '40%' }}>
                    <button className='button buttonSmall' type='button' onClick={() => handleSort('TITLE')}>Title</button>
                </span>
                <span style={{ width: '30%' }}>
                    <button className='button buttonSmall' type='button' onClick={() => handleSort('AUTHOR')}>Author</button>
                </span>
                <span style={{ width: '10%' }}>
                    <button className='button buttonSmall' type='button' onClick={() => handleSort('COMMENT')}>COMMENT</button>
                </span>
                <span style={{ width: '10%' }}>
                    <button className='button buttonSmall' type='button' onClick={() => handleSort('POINT')}>Points</button>
                </span>
                <span style={{ width: '10%' }}>Actions</span>
            </li>
            {sortedList.map((item) => (
                <Item
                    key={item.objectID}
                    item={item}
                    onRemoveItem={onRemoveItem}
                />
            ))}
        </ul>
    );
}

const Item = ({ item, onRemoveItem }: ItemProps) => (
    <li className='item'>
        <span style={{ width: '40%' }}>
            <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '30%' }}>{item.author}</span>
        <span style={{ width: '10%' }}>{item.num_comments}</span>
        <span style={{ width: '10%' }}>{item.points}</span>
        <span style={{ width: '10%' }}>
            <button
                type="button"
                onClick={() => onRemoveItem(item)}
                className='button buttonSmall'
            >
                Dismiss
            </button>
        </span>
    </li>
);

export { List, Story, Stories }