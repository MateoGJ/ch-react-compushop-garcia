import Item from './Item';

const ItemList = ({items}) => {
    return (
        <div className="row">
          {(items || []).map(item => <Item key={item.id} titulo={item.titulo} descripcion={item.descripcion} precio={item.precio} stock={item.stock} imagen={item.imagen} id={item.id} />)}
        </div>
    );
}

export default ItemList;
