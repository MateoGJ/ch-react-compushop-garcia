import ItemListContainer from '../components/ItemListContainer';

function Home({greeting, productos}) {

  return (
      <>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Bienvenidos</h1>
              <p className="lead">{greeting}</p>
          </div>

          <div className="container">
              <ItemListContainer productos={productos}/>
          </div>
      </>

  );
}

export default Home;

