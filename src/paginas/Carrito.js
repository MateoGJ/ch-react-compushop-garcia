import { useCart }  from '../contexts/CartContext';
import ItemCarrito from '../components/ItemCarrito';

function Carrito () {
  const cart = useCart();

  return (
      <>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Carrito</h1>
      </div>

      <div className="container table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                {(Object.entries(cart.items)).map(([key, item]) => {
                    if (!item.deleted) {
                        return (<ItemCarrito key={key} item={item} onRemoveItem={(_item) => {cart.removeItem(_item)}}/>);
                    }
                    return (<tr colspan="5"></tr>);
                })}
            </tbody>
            <tfoot>
                <tr>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td scope="col">Total: $ { (Object.entries(cart.items)).map(([key, item]) => item.quantity * item.producto.precio ).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}  </td>
                  <th scope="col"></th>
                </tr>
            </tfoot>
          </table>          
      </div>
      </>
  );
}

export default Carrito;
