import defaultImage from '../assets/images/demo-page/demo.jpg';
import carouseFirstImage from '../assets/images/demo-page/caroussel-1.svg';
import carouseSecondImage from '../assets/images/demo-page/caroussel-2.svg';
import carouseThirdImage from '../assets/images/demo-page/caroussel-3.svg';


export default function arrayContentDemo() {
  // Définition du tableau
  const arrayContentDemo = [
    {
      title: "titre H1",
      element: `<h1>Je suis un titre h1</h1>`
    },
    {
      title: "les textes et images",
      element: ` <div class="txt-img">
      <img src="${defaultImage}" alt="paysage" width='700px' height='500px'>
        <div class="txt-link">
          <h2>Je suis un titre h2</h2>
          <p class="txt-roboto">Aliquam egestas, mi a porta molestie, orci nulla rutrum est, vel 
          euismod dolor lectus ac ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Duis molestie arcu mauris, bibendum vulputate erat pulvinar a. Curabitur hendrerit eleifend porttitor.
          Vestibulum ornare maximus dui nec congue. Nulla sollicitudin fermentum porttitor. Etiam pulvinar nunc diam,
          quis cursus turpis rhoncus eu. Sed quis quam laoreet, varius ex et, pretium metus. Morbi sit amet tellus
          s in leo semper pellentesque vestibulum non sem.Aliquam egestas, mi a porta molestie, orci nulla rutrum est, vel 
          euismod dolor lectus ac ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Duis molestie arcu mauris, bibendum vulputate erat pulvinar a. Curabitur hendrerit eleifend porttitor.
          Vestibulum ornare maximus dui nec congue. Nulla sollicitudin fermentum porttitor. Etiam pulvinar nunc diam,
          quis cursus turpis rhoncus eu. Sed quis quam laoreet, varius ex et, pretium metus. Morbi sit amet tellus
          s in leo semper pellentesque vestibulum non sem.</p> 
          <a href="#" class=" txt-roboto badge badge-success">Je suis un lien de success</a>
          <a href="#" class=" txt-roboto badge badge-danger">Je suis un lien de danger</a>


        </div>

      </div>`
    },
    {
      title: "les boutons",
      element: `
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
        <button type="button" class="btn btn-link">Link</button>
      </div>
        `
    },
    {
      title: "les cards",
      element: `
      <div class="d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${defaultImage}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${defaultImage}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${defaultImage}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${defaultImage}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      `
    },
    {
      title: "Progress bar ",
      element: `
      <h3>Je suis un titre h3 de la Progress bar</h3>

      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
      <div class="progress">
        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
      </div>
      <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
      </div>
      <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
      </div>
      `
    },
    {
      title: "Modal",
      element: `
      <h4>Je suis un titre h4 de la Modale</h4>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Contenu texte 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  
      `
    },
    {
      title: "titre H1",
      element: `
      <h5>Je suis un titre h5 de la Modale</h5>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="${carouseFirstImage}" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${carouseSecondImage}" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${carouseThirdImage}" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>`
    },
    {
      title: "Formulaire",
      element: `
      <h6>Je suis un titre h6 du Formulaire</h6>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nom@exemple.com">
        </div>

        <div class="form-group">
          <label for="inputAddress">Addresse</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Mot de passe</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe">
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputCity">Ville</label>
            <input type="text" class="form-control" id="inputCity" placeholder="Rennes">
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Ton collegue préféré</label>
            <select id="inputState" class="form-control">
              <option selected>Choisis</option>
              <option>Aïna</option>
              <option>Mme Akagadzhieva</option>
              <option>Mme Lagrande</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label for="inputZip">Code postale</label>
            <input type="text" class="form-control" id="inputZip" placeholder="35000">
          </div>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ce site est beaucoup trop cool..."></textarea>
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block">Envoyer</button>


      </form>`
    },
  
  ];

  return arrayContentDemo;
}
