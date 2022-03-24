import './header.scss';

function Header() {
  return (
    <div className='header'>
      <div className='headerWrapper'>
        <h1 className='title'>
          James Black
        </h1>
        <section class="links">
          <a href="#" target="_blank" class="fa fa-2x fa-facebook"></a>
          <a href="#" target="_blank" class="fa fa-2x fa-twitter"></a>  
          <a href="#" target="_blank" class="fa fa-2x fa-instagram"></a>  
          <a href="#" target="_blank" class="fa fa-2x fa-spotify"></a>  
          <a href="#" target="_blank" class="fa fa-2x fa-soundcloud"></a>  
      </section>
      </div>
    </div>
  )
}

export default Header