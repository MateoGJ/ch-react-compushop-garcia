import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({producto}) => {
    return (
        <div className="card" style={{color: 'black'}}>
          <ItemDetail producto={producto}/> 
        </div>
    );
}

export default ItemDetailContainer;

