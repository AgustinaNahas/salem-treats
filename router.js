// Componentes
const HomeComponent = {
    postRender: () => {

        $("#jumbotron-spacetrip").fadeIn();

        $( "#showToast" ).click(function() {
            $('.toast').toast('show');
        });

    },

    render: () => {
        return `
            <div class="parallax"></div>
            <div class="parallax-filter">
                <div class="jumbotron jumbotron-fluid" id="jumbotron-spacetrip" style="display: none;">
                    <div class="container titulos">
                        <h1 class="display-4 salem-title">Salem Treats <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" style=" fill:#000000;"><path fill="#e6ee9c" d="M28,9.88V9h-8v0.898c0,4.064-1.946,7.798-5.047,10.425c-3.432,2.907-5.445,7.437-4.849,12.408 c0.762,6.351,5.926,11.468,12.282,12.179C30.841,45.855,38,39.264,38,31c0-4.439-2.067-8.392-5.29-10.954 C29.645,17.608,28,13.796,28,9.88z"></path><path fill="#c0ca33" d="M19 7c-.552 0-1 .448-1 1s.448 1 1 1h2l-.333-2H19zM29 7h-1.667L27 9h2c.552 0 1-.448 1-1S29.552 7 29 7z"></path><path fill="#795548" d="M28 3L20 3 20.667 7 27.333 7z"></path><path fill="#afb42b" d="M20.667 7L21 9 27 9 27.333 7zM34.725 25.652c-.356-.706-1.27-.862-1.851-.326C32.478 25.691 31.996 26 31.495 26c-.399 0-.803-.224-1.167-.522-.772-.632-1.899-.633-2.671-.001C27.293 25.776 26.889 26 26.489 26c-.392 0-.79-.216-1.148-.507-.785-.636-1.917-.636-2.702-.001C22.279 25.783 21.882 26 21.489 26c-.401 0-.807-.226-1.171-.526-.764-.629-1.884-.629-2.648 0C17.305 25.774 16.9 26 16.499 26c-.502 0-.984-.311-1.38-.676-.558-.516-1.465-.411-1.811.265-.888 1.733-1.37 3.706-1.301 5.805.203 6.225 5.34 11.382 11.564 11.6C30.394 43.231 36 37.77 36 31 36 29.074 35.537 27.261 34.725 25.652z"></path><path fill="#d4e157" d="M16 34A1 1 0 1 0 16 36 1 1 0 1 0 16 34zM22 39A1 1 0 1 0 22 41 1 1 0 1 0 22 39zM31 36A1 1 0 1 0 31 38 1 1 0 1 0 31 36zM15 28A1 1 0 1 0 15 30 1 1 0 1 0 15 28zM33 30A1 1 0 1 0 33 32 1 1 0 1 0 33 30z"></path><path fill="#afb42b" d="M27 18A1 1 0 1 0 27 20 1 1 0 1 0 27 18zM23 14A1 1 0 1 0 23 16 1 1 0 1 0 23 14zM22 21A1 1 0 1 0 22 23 1 1 0 1 0 22 21z"></path><path d="M29,33.062c0.001-0.066,0-0.131-0.002-0.198c-0.074-2.684-2.412-4.915-5.096-4.863C21.186,28.053,19,30.271,19,33 c0,0.036,0,0.072,0.001,0.108C19.024,34.171,19.94,35,21.003,35H21v1c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1v-1h-0.007 C28.075,35,28.986,34.143,29,33.062z"></path><path fill="#fff" d="M22 31A1 1 0 1 0 22 33 1 1 0 1 0 22 31zM26 31A1 1 0 1 0 26 33 1 1 0 1 0 26 31zM25 35L23 35 24 33z"></path></svg></h1> 
                        <p class="lead">Tortas y snacks dulces.</p>
                        
                        <div class="carrousel">
                            <img class="carrousel_img-1" src="https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/e35/123033233_701340280810647_5803861884512429427_n.jpg?tp=1&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Rle0HMh6Zw0AX9Ot2TF&edm=AP_V10EAAAAA&ccb=7-4&oh=fc4f4df4cb21332a349396d085a5efff&oe=6089C3F6&_nc_sid=4f375e"/>                
                            <img class="carrousel_img-2" src="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/123137522_637653217115440_6394546226522653725_n.jpg?tp=1&_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=HvPL6ZnsJpEAX-_K8tQ&edm=AP_V10EAAAAA&ccb=7-4&oh=ea33c2f419c086eeeef0a2b5b1e15a72&oe=608B79C0&_nc_sid=4f375e"/>                
                            <img class="carrousel_img-3" src="https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/e35/129720917_1076196079495597_7732653077984363005_n.jpg?tp=1&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=whGTZTipAA4AX8MHXAj&edm=AP_V10EAAAAA&ccb=7-4&oh=3948d255077bdf9b5d1ada18ec461d4f&oe=6089BED5&_nc_sid=4f375e"/>                
                            <img class="carrousel_img-4" src="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/131910473_190688472785973_3888887678180915256_n.jpg?tp=1&_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=KU1DIhLlTWoAX_Ow7Dl&edm=AP_V10EAAAAA&ccb=7-4&oh=5cc475a96b0140c06750a5246b6818fb&oe=608AEEB5&_nc_sid=4f375e"/>                
                            <img class="carrousel_img-5" src="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/122244288_2749397288636078_2393061020363719490_n.jpg?tp=1&_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=T2HGvZmfIKwAX-J83uu&edm=AP_V10EAAAAA&ccb=7-4&oh=1a3a5dccdd6fda2eaed3f4deb4e49fc9&oe=608AF4DC&_nc_sid=4f375e"/>                
                            <img class="carrousel_img-6" src="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/167390083_368115574330255_4197648100556574979_n.jpg?tp=1&_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=C4fBHPlnyeMAX8hC6Yd&edm=AP_V10EAAAAA&ccb=7-4&oh=79afd8e749d670defc2638c33c0a20c7&oe=608B35BD&_nc_sid=4f375e"/>                
                            <img class="carrousel_img-7" src="https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/e35/120660330_372188577498327_386310777244717273_n.jpg?tp=1&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=IRRkSzEmQaYAX-Uk-ht&edm=AP_V10EAAAAA&ccb=7-4&oh=1cc176c6757f07cf2608cca273f33e37&oe=608B1D38&_nc_sid=4f375e"/>                
                            <img class="carrousel_img-8" src="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/120742894_185684153015971_6381008370447682777_n.jpg?tp=1&_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=9Pwp_glUR6wAX8H1TRz&edm=AP_V10EAAAAA&ccb=7-4&oh=8104dc1f13ec8d6a3c24252de9af0119&oe=608A003E&_nc_sid=4f375e"/>                
                            <img class="carrousel_img-9" src="https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/e35/119871898_667134970903563_673868992202604667_n.jpg?tp=1&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=WzmDGuwNyD4AX8mBC77&edm=AP_V10EAAAAA&ccb=7-4&oh=0a066521dc7f93f86803a98614089330&oe=608C0FF5&_nc_sid=4f375e"/>                
                            <img class="carrousel_img-10" src="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/122927071_268615927879166_8909018141484786012_n.jpg?tp=1&_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q_gcvK94Gm0AX_6ZUim&edm=AP_V10EAAAAA&ccb=7-4&oh=030b3ba1d0f731b7cedd5c20f16b0b52&oe=6089CB49&_nc_sid=4f375e"/>                
                        </div>
                    </div>
                </div>    
            </div>
            
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.0/jquery.min.js"></script>
        `;
    }
}

const TreatsComponent = {
    postRender: () => {
        var buttonCalcular = document.getElementById("calcular");
        buttonCalcular.addEventListener("click", calcularPrecio);

        var nombre = document.getElementById("inputName")
        var cantPx = document.getElementById("inputPxs")
        var planeta = document.getElementById("inputPlaneta")
        nombre.addEventListener("blur", validarCampo);
        cantPx.addEventListener("blur", validarCampo);
        planeta.addEventListener("blur", validarCampo);

        document.getElementsByClassName("busqueda-input")[0].onblur = halfWitdh
        document.getElementsByClassName("busqueda-input")[0].onfocus = fullWitdh
        document.getElementsByClassName("busqueda-input")[0].onkeypress = capturarEnter
    },

    render: () => {
        return `
                <section id="spacetrip" style="background-color: #0D1221; z-index: 500; position: relative;">
                    <div class="container" style="padding: 60px;">
                        <h2 id="titulo" style="margin-bottom: 24px;">Bienvenides!</h2>
            
                        <div id="seccion" class="alert alert-dark alert-dismissible fade show" role="alert">
                                    <i class="bi bi-star" style="margin-right: 5px;"></i>  Los viajes aún no están funcionando, pero comenzarán muy pronto.
                                    Anotate si querés reservar tu viaje lo antes posible. Hay pocos lugares!
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
            
                        </div>
            
                        <form style="margin-top: 60px;">
                            <div class="row mb-3">
                                <label for="inputName" class="col-sm-2 col-form-label">Nombre</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputName">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPxs" class="col-sm-2 col-form-label">Cantidad de pasajeros</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" id="inputPxs">
                                </div>
                            </div>
            
                            <div class="row mb-3">
                                <label for="inputPlaneta" class="col-sm-2 col-form-label">Planeta</label>
                                <div class="col-sm-10">
                                    <select class="form-control" id="inputPlaneta">
                                        <option selected value="">Elegir...</option>
                                        <option value="0">Mercurio</option>
                                        <option value="1">Venus</option>
                                        <option value="2">Marte</option>
                                        <option value="3">Jupiter</option>
                                        <option value="4">Saturno</option>
                                        <option value="5">Urano</option>
                                        <option value="6">Neptuno</option>
                                    </select>
                                </div>
            
                            </div>
                            <div class="form-group row">
                                <label for="inputFecha" class="col-2 col-form-label">Fecha de viaje</label>
                                <div class="col-10">
                                    <input class="form-control" type="date" value="2011-08-19" id="inputFecha">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-10 offset-sm-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="inputIdaYVuelta">
                                        <label class="form-check-label" for="inputIdaYVuelta">
                                            Ida y vuelta
                                        </label>
                                    </div>
                                </div>
                            </div>
            
                            <button type="button" class="btn btn-dark calcular" id="calcular">Calcular precio</button>
            
                            <div id="alert-calculo" class="alert alert-warning alert-dismissible fade hide" role="alert"
                                 style="margin-top: 30px; margin-bottom: 60px;">
            
                                <img id="alert-imagen-planeta" src="" style="display: inline-block; width: 40px; height: 40px;"/>
                                <i class="bi bi-star" style="margin-right: 5px;"></i> El viaje que ingresaste tiene un precio de <strong id="alert-calculo-precio"></strong> U$D
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
            
                        </form>
            
                        <div class="input-group busqueda">
                            <input type="text" class="form-control busqueda-input" placeholder="Buscar..." aria-label="Buscar">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="bi bi-search" style=""></i></span>
                            </div>
                        </div>
            
                        <div id="alert-busqueda" class="alert alert-danger alert-dismissible fade hide" role="alert"
                             style="margin-top: 30px; margin-bottom: 60px;">
                            <i class="bi bi-star" style="margin-right: 5px;"></i>
                            <span id="alert-busqueda-texto"></span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
            
                    </div>
                    
                </section>

        `;
    }
}

const TortasComponent = {
    postRender: () => {
        document.getElementById("modal-login").click()

        var api_url = 'https://api.estadisticasbcra.com/usd' ; // URL destino de la llamada a la API
        var key = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDU2MjU2NzYsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJtLmFndXN0aW5hLm5haGFzQGdtYWlsLmNvbSJ9.8QdWDmNsX6u1WXHCSG-MlBkkpXG5hg8ny3zV8U7Bj2RoYn8ZEP9YJFtZvjbyicuUoshaBQSkY68G6_HgEgGhhw' // clave alfanumerica para autenticarse (ej)

        $.ajax({
            url: api_url,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + key);
            },
            success: function(result){
                console.log(result)
            }
        })



        $.get( "https://swapi.dev/api/starships",
            function(data, status){
                console.log(data, status)
                if (status === "success"){
                    document.getElementById("alertCarga").className =
                        "alert alert-success alert-dismissible fade show";
                } else {
                    document.getElementById("alertCarga").className =
                        "alert alert-danger alert-dismissible fade show";

                }

                data.results.forEach((nave) => {
                    var id = nave.name.split(" ").join("-").toLowerCase()
                    navesEnVenta.push(
                        new NaveEnVenta(id, nave.name, "https://img.icons8.com/color/452/" + id + ".png", nave.cost_in_credits)
                    )
                })
            }
        );


        $(".carrito_button_ingresar").click(ingresar);
        $(".carrito_button_anonim").click(comprarAnonim);

        $("#button-carrito").click(function(){
            $("#carrito-content").slideToggle()

            var colorActual = $("#button-carrito")[0].style.background

            if (colorActual === "#343a40") $("#button-carrito").css("background", "grey")
            else $("#button-carrito").css("background", "#343a40")

        })
    },

    render: () => {
        return `
            <section id="carrito" style="background-color: lightgrey; padding-top: 40px; padding-bottom: 40px; z-index: 10; position: relative;">
        
                <div class="container">
                    <p>
                        <a class="btn btn-dark" id="button-carrito">
                            <i class="bi bi-cart"></i>
                        </a>
                    </p>
                    <div class="collapse" id="carrito-content">
                        <ul id="carrito_carrito" class="container" style="padding: 60px;">
                        </ul>
                    </div>
                </div>
        
                <div id="alertCarga" class="alert alert-warning alert-dismissible fade hide" role="alert">
                    <strong>Productos cargados!</strong> ASDF.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
        
                <div id="carrito_productos" class="container">
                </div>
        
            </section>
            <button id="modal-login" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style="display: none;">
                Login
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div id="carrito_div" class="modal-body">
                            <form class="carrito_form_ingresar">
                                <div class="form-group">
                                    <label for="nombreUsuarie">Nombre</label>
                                    <input type="text" class="form-control" id="nombreUsuarie">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark carrito_button_ingresar" data-dismiss="modal">Ingresar</button>
                            <button type="button" class="btn btn-light carrito_button_anonim" data-dismiss="modal">Comprar anónimamente</button>
                        </div>
                    </div>
                </div>
            </div>

        `;
    }
}

const EventosComponent = {
    postRender: () => {
        var buttonCalcular = document.getElementById("calcular");
        buttonCalcular.addEventListener("click", calcularPrecio);

        var nombre = document.getElementById("inputName")
        var cantPx = document.getElementById("inputPxs")
        var planeta = document.getElementById("inputPlaneta")
        nombre.addEventListener("blur", validarCampo);
        cantPx.addEventListener("blur", validarCampo);
        planeta.addEventListener("blur", validarCampo);

        document.getElementsByClassName("busqueda-input")[0].onblur = halfWitdh
        document.getElementsByClassName("busqueda-input")[0].onfocus = fullWitdh
        document.getElementsByClassName("busqueda-input")[0].onkeypress = capturarEnter
    },

    render: () => {
        return `
                <section id="spacetrip" style="background-color: #0D1221; z-index: 500; position: relative;">
                    <div class="container" style="padding: 60px;">
                        <h2 id="titulo" style="margin-bottom: 24px;">Bienvenides!</h2>
            
                        <div id="seccion" class="alert alert-dark alert-dismissible fade show" role="alert">
                                    <i class="bi bi-star" style="margin-right: 5px;"></i>  Los viajes aún no están funcionando, pero comenzarán muy pronto.
                                    Anotate si querés reservar tu viaje lo antes posible. Hay pocos lugares!
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
            
                        </div>
            
                        <form style="margin-top: 60px;">
                            <div class="row mb-3">
                                <label for="inputName" class="col-sm-2 col-form-label">Nombre</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputName">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPxs" class="col-sm-2 col-form-label">Cantidad de pasajeros</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" id="inputPxs">
                                </div>
                            </div>
            
                            <div class="row mb-3">
                                <label for="inputPlaneta" class="col-sm-2 col-form-label">Planeta</label>
                                <div class="col-sm-10">
                                    <select class="form-control" id="inputPlaneta">
                                        <option selected value="">Elegir...</option>
                                        <option value="0">Mercurio</option>
                                        <option value="1">Venus</option>
                                        <option value="2">Marte</option>
                                        <option value="3">Jupiter</option>
                                        <option value="4">Saturno</option>
                                        <option value="5">Urano</option>
                                        <option value="6">Neptuno</option>
                                    </select>
                                </div>
            
                            </div>
                            <div class="form-group row">
                                <label for="inputFecha" class="col-2 col-form-label">Fecha de viaje</label>
                                <div class="col-10">
                                    <input class="form-control" type="date" value="2011-08-19" id="inputFecha">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-10 offset-sm-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="inputIdaYVuelta">
                                        <label class="form-check-label" for="inputIdaYVuelta">
                                            Ida y vuelta
                                        </label>
                                    </div>
                                </div>
                            </div>
            
                            <button type="button" class="btn btn-dark calcular" id="calcular">Calcular precio</button>
            
                            <div id="alert-calculo" class="alert alert-warning alert-dismissible fade hide" role="alert"
                                 style="margin-top: 30px; margin-bottom: 60px;">
            
                                <img id="alert-imagen-planeta" src="" style="display: inline-block; width: 40px; height: 40px;"/>
                                <i class="bi bi-star" style="margin-right: 5px;"></i> El viaje que ingresaste tiene un precio de <strong id="alert-calculo-precio"></strong> U$D
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
            
                        </form>
            
                        <div class="input-group busqueda">
                            <input type="text" class="form-control busqueda-input" placeholder="Buscar..." aria-label="Buscar">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="bi bi-search" style=""></i></span>
                            </div>
                        </div>
            
                        <div id="alert-busqueda" class="alert alert-danger alert-dismissible fade hide" role="alert"
                             style="margin-top: 30px; margin-bottom: 60px;">
                            <i class="bi bi-star" style="margin-right: 5px;"></i>
                            <span id="alert-busqueda-texto"></span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
            
                    </div>
                    
                </section>

        `;
    }
}


const ErrorComponent = {
    render: () => {
        return `
      <p>Error</p>
    `;
    }
}


const routes = [
    { path: '/', component: HomeComponent, },
    { path: '/treats', component: TreatsComponent, },
    { path: '/tortas', component: TortasComponent, },
    { path: '/eventos', component: EventosComponent, },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path, routes) =>
    routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const router = () => {
    const path = parseLocation();

    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};

    $('#app').html(component.render());
    if (component.postRender) component.postRender();

};

$( window ).on( 'load', function( e ) {
    router();
} );

$( window ).on( 'hashchange', function( e ) {
    router();
} );

