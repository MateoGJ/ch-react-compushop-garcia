import ItemListContainer from '../components/ItemListContainer';

function Tienda ({productos}) {
  return (
      <>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Tienda</h1>
          </div>

          <div className="container">
              <ItemListContainer productos={productos}/>
          </div>
      </>
  );
}

export default Tienda;
