/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
    return (
        <><footer className="text-center footer-style bg-dark ">
        <div className="container">
            <div className="row m-5">
                <div className="col-md-4 footer-col text-light">
                    <h3 className="m-3">Addresses</h3>
                    <p>
                        CABA - Argentina <br />
                        Azul 2495 <br />
                        <a className="mail text-light" href="mailto:franco-petshop@gmail.com">Mytinerary@gmail.com</a>
                    </p>
                </div>
                <div className="col-md-4 footer-col text-light">
                    <h3 className="m-3">Social Networks</h3>
                    <div className="d-flex justify-content-center">
                        <a href="https://www.facebook.com"><i className="fab fa-facebook-square m-3 fb"></i></a>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram m-3 ig"></i></a>
                        <a href="#"><i className="fab fa-whatsapp m-3 ws"></i></a>
                    </div>
                </div>
                <div className="col-md-4 footer-col text-light">
                    <div>
                        <h3 className="m-3">Opening Hours</h3>
                        <p>Mon. a Fry. de 9 a 20h. Sat de 10 a 14h.</p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-primary text-center text-light p-3">
            <h6>&copy; 2020 Mytinerary | All Rigth Reserved</h6>
        </div>
    </footer>
        </>
    )
}

export default Footer