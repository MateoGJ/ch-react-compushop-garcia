import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    return (
        <div style={{color: 'green'}}>
          {greeting}
          <ItemList /> 
        </div>
    );
}

export default ItemListContainer;
