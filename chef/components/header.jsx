import chef_img from "../src/assets/shef.png"

export default function Header(){
    return (
      <header>
      <img src={chef_img} className="chefoto" alt="shef-photo" />
      <h1 className="namecafe">Chef Claude</h1>
      </header>
    )
  }