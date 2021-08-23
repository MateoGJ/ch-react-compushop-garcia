const ItemDetailCantidadAgregada = ({precio, cantidad}) => {
    return (
        <p className="card-text">En carrito: {cantidad} items {(() => {
                    if (cantidad > 0) {
                        return  ( <span> - Precio Total: $ {(cantidad * precio)} </span>);
                    }
                    return ('');
                })()}
        </p>
    );
}

export default ItemDetailCantidadAgregada;
