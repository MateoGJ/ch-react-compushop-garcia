import ItemDetailCantidadAgregada from './ItemDetailCantidadAgregada';
const ItemCarrito = ({item = {}, onRemoveItem }) => {
    return (
      <tr>
          <td>
              {item.producto.titulo}
          </td>
          <td>
              {item.producto.precio}
          </td>
          <td>
              {item.quantity}
          </td>
          <td>
              $ {(item.quantity * item.producto.precio)}
          </td>
          <td>
              <span className="btn btn-outline-danger" onClick={() => onRemoveItem(item)}>Quitar</span>
          </td>
      </tr>
    );
}

export default ItemCarrito;
