import { Link } from 'react-router-dom';
import { useCart }  from '../contexts/CartContext';
import { useState } from 'react';
import { getFirestore } from '../firebase';
import * as firebase from "firebase/app";

function Orden () {
  const cart = useCart();
  const [hasError, setHasError] = useState(false);
  const [ordenEnviada, setOrdenEnviada] = useState(false);
  const [ordenId, setOrdenId] = useState('');
  const [orden, setOrden] = useState({
    nombre: '',
    apellido: '',
    email: ''
  });

  function handleChange(field, event) {
    orden[field] = event.target.value;
    setOrden(orden);
  }

  function enviarPedido() {
    if(orden.apellido && orden.nombre && orden.email) {
        const pedido = {
            buyer: orden,
            items: (Object.entries(cart.items)).map(([key, item]) => {
                return {
                  id: item.producto.id,
                  title: item.producto.titulo,
                  precio: item.producto.precio,
                  quantity: item.quantity,
                  subtotal: item.quantity * item.producto.precio
                }; 
            }),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: (Object.entries(cart.items)).map(([key, item]) => item.quantity * item.producto.precio ).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        };
        insertOrden(pedido);
        setOrdenEnviada(true);
        setHasError(false);
    } else {
        setHasError(true);
    }
  }

  function sincronizarStock(pedido) {
      cart.clear();
  }

  function insertOrden(pedido) {
      const db = getFirestore();
      db.collection("ordenes").add(pedido)
      .then((docRef) => {
          setOrdenId(docRef.id);
          sincronizarStock(pedido);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }


  return (
      <>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Orden de compra </h1>
      </div>

      <div className="container table-responsive">
          {(() => {
              if(ordenEnviada) {
                  return (
                      <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">La orden de pedido fue enviada!</h4>
                        <p>Su número de seguimiento es: Orden Nro. {ordenId} </p>
                        <hr/>
                        <p className="mb-0">
                            <Link className="btn btn-outline-success" to={`/`}>
                                Seguir comprando 
                            </Link>
                        </p>
                      </div>
                  );
              }
              return (
                <></>
              );
          })()}
          {(() => {
              if(hasError) {
                  return (
                      <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">Datos incompletos</h4>
                        <p>Debe completar todos los campos y verificar que sean correctos</p>
                        <hr/>
                      </div>
                  );
              }
  
              return (
                <></>
              );
          })()}
          {(() => {
            if (Object.entries(cart.items).length > 0) {
            return (
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                      <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Tus productos</span>
                        <span className="badge badge-secondary badge-pill">{(Object.entries(cart.items).length)}</span>
                      </h4>
                      <ul className="list-group mb-3">
                        {(Object.entries(cart.items)).map(([key, item]) => {
                            return (
                            <li key={key} className="list-group-item d-flex justify-content-between lh-condensed">
                              <div>
                                <h6 className="my-0">{item.producto.titulo}</h6>
                                <small className="text-muted">${item.producto.precio} x {item.quantity}</small>
                      
                              </div>
                              <span className="text-muted">${(item.quantity * item.producto.precio)}</span>
                            </li>
                            );
                        })}
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Total</span>
                          <strong>${ (Object.entries(cart.items)).map(([key, item]) => item.quantity * item.producto.precio ).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</strong>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-8 order-md-1">
                      <h4 className="mb-3">Datos del comprador</h4>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label>Nombre</label>
                            <input type="text" className="form-control" name="nombre" id="nombre" placeholder="" onChange={(evt) => { handleChange('nombre', evt) }} />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label>Apellido</label>
                            <input type="text" name="apellido" className="form-control" id="apellido" placeholder=""  onChange={(evt) => { handleChange('apellido', evt) }}/>
                          </div>
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" id="email" placeholder="nombre@correo.com"  onChange={(evt) => { handleChange('email', evt) }}/>
                        </div>

                        {(() => {
                            if(!ordenEnviada) {
                              return (
                                <>
                                  <hr className="mb-4"/>
                                  <span className="btn btn-primary btn-lg btn-block" onClick={enviarPedido}>Enviar pedido</span>
                                </>
                              )
                            }
                        })()}
                    </div>

              </div>
            );
          } else {
              if (!ordenEnviada) {
                  return (
                      <div className="alert alert-primary" role="alert">
                        <h4 className="alert-heading">Carrito vacío</h4>
                        <p>No existen productos seleccionados para poder procesar la compra.</p>
                        <hr/>
                        <p className="mb-0">
                            <Link className="btn btn-outline-primary" to={`/`}>
                                Seguir comprando 
                            </Link>
                        </p>
                      </div>
                  );
              }
          }
        })()}
      </div>
      </>
  );
}

export default Orden;
