import ItemList from './ItemList';

const ItemListContainer = ({productos}) => {
    return (
        <div className="container">
          <ItemList items={productos}/> 
        </div>
    );
}

export default ItemListContainer;
