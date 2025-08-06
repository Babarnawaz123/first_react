function Header(){
  return(
<div><h3>header</h3>
<h4>header data </h4>
</div>
  )
}
// named export
export function NavBar(){
return(
<div class="NavBar">
<div class="NavLinks">
<a href=""><p>home</p></a> 
<br/><a href="about"><p>about</p></a>
<br /><a href="#"><p>servies</p></a>
<br /><a href="#"><p>contact us</p></a>
</div> </div>)

}
export function Setting(){
return(
<div>
<h2>Setting</h2>
</div>)
}
export function SearchBar(){
return(
<div>
<h2>Search Bar</h2>
</div>)
}
export function Jsx(){
  const UserName = "Babar Nawaz";
  let x= 60;
  let y =70;
  return(
    <div>
   <h4>{UserName}</h4>
   <h3>{20+10}</h3>
   <h3>{x+y}</h3>
   </div>

  )
}

export default Header;