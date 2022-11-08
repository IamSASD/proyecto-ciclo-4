import { Link } from "react-router-dom"
import { Footer, NavBar } from "../components"
import '../css/product-activity.css'
import '../css/user.css'

export const User = () => {
  return (
    <div>
        <NavBar component={ 'user' } />
        <main className="content">
          <div className="container">
            <h2 className="h2-title">
              Mi Perfil
            </h2>
            <div className="form-container">
              <form className="user-form">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" disabled placeholder="Andres"/>
                
                <label htmlFor="mail">Correo</label>
                <input type="email" disabled  placeholder="example@gmail.com"/>
              </form>
              <div className="button-container">
                <Link to={ '/' }>
                  <button className="close-session">Cerrar Sesion</button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
    </div>
  )
}