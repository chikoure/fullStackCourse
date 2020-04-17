import React from "react"

function about() {
  return (
    <div>
      <form action="/sucess" name="contant" method="post" data-netlify="true">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email"></input>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Nom</label>
          <input type="text" name="firstName"></input>
        </div>
        <input type="hidden" name="form-name" value="contact"></input>
        <input type="submit" value="envoyer"></input>
      </form>
    </div>
  )
}

export default about
