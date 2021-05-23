import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Recipes from './Recipes'
import ScrollAnimation from 'react-animate-on-scroll';
import { Navbar, Nav, } from 'react-bootstrap'
import React, { useState } from 'react'

function App() {
  let [sectionNumber, setSectionNumber] = useState(0)
  let [scrollElement, setScrollElement] = useState(0)
  let [leftPossible, setLeftPossible] = useState(false)
  let [rightPossible, setRightPossible] = useState(true)

  let setSection = (num) => {
    setSectionNumber(num)
    console.log('setting value of section', num, '  ', sectionNumber)
  }
  let scrollPrevious = () => {
    if (scrollElement === 0) {
      setLeft(false)
      return
    }else if(scrollElement === 1){
      setLeft(false) 
      setScrollElement(scrollElement - 1) 
    }else {  
      setLeft(true)  
      setRight(true) 
      setScrollElement(scrollElement - 1)
    }
  }
  let scrollNext = () => {
    if (scrollElement === Recipes.length - 1) { 
      setRight(false)
      return
    }else if(scrollElement === Recipes.length - 2){
      setRight(false) 
      setScrollElement(scrollElement + 1) 
    }else {  
      setLeft(true)  
      setRight(true) 
      setScrollElement(scrollElement + 1)
    }
  }
  let setLeft = (val)=>{
    setLeftPossible(val)
    console.log('setting left::', leftPossible )
  }
  let setRight= (val)=>{
    setRightPossible(val)
    console.log('setting right::', rightPossible )
  }
  return (
    <div className="">

      <Navbar expand="lg">

        <Nav className="" style={{flexGrow: '0'}}>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=""> 
          <Nav.Link className="mx-3" href="#home">ABOUT</Nav.Link>
          <Nav.Link className="mx-3" href="#home">COMMUNITY</Nav.Link>
          <Nav.Link className="mx-3" href="#home">LOCATION</Nav.Link>
          <Nav.Link className="mx-3" href="#home">OUR&nbsp;MENU</Nav.Link>
          <Nav.Link className="mx-3" href="#home">RECIPES</Nav.Link>
            <Nav.Link className="mx-3 right-link" href="#home">CONTACT</Nav.Link>
            <Nav.Link className="mx-3" href="#link">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <div className="pageScroll" style={{backgroundColor: 'rgba(255, 255, 255, 0)' }}>
        <ul style={{ listStyleType: 'none', zIndex:'100000' }}>
          <li >{sectionNumber === 1 ? '1   ' : '  '}</li>
          <li >{sectionNumber === 2 ? '2   ' : '  '}</li>
          <li >{sectionNumber === 3 ? '3   ' : '  '}</li>
          <li >{sectionNumber === 4 ? '4   ' : '  '}</li>
          <li >{sectionNumber === 5 ? '5   ' : '  '}</li>
        </ul>
      </div>


      <ScrollAnimation duration={0.01} animateIn="animate__fadeIn" initiallyVisible={true} afterAnimatedIn={() => { setSection(1) }}>
        <div className="section1">
          <img src="./section1.png" className="animate__animated animate__fadeInDown" alt="Main top" />
        </div>
      </ScrollAnimation>

      <ScrollAnimation duration={0.01} animateIn="fadeIn" afterAnimatedIn={() => { setSection(2) }}>
        <div className="section2">
          <div className="section2__row">
            <div className="label">
              <h1 style={{ fontSize: '3.2rem', color: '#6a5953' }}>MEET OUR COMMUNITY</h1>
              <div className="mb-2 mr-auto">
                <a href="adgfds" className='commonLink'> Know&nbsp;More</a>
              </div>
              <p>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
            </div>

            <div className={sectionNumber === 2 ? "card-group animate__animated animate__fadeInUpBig" : 'card-group'} style={{ position: 'relative', alignSelf: 'flex-end' }}>
              <img src="detail02.png" alt="detail 02" style={{ position: 'absolute', top: '72%', left: '30%' }} />
              <img src="detail1.png" alt="detail 01" style={{ position: 'absolute', bottom: '-15%', right: '-2%' }} />
              <div className="card">
                <img src="./Insta-colored.png" alt="Insta-colored" style={{ position: 'absolute', top: '0', right: '0' }} />
                <img src="https://article.innovadatabase.com/articleimgs/article_images/637507976667361662food%20waste%20trash%20food%20square.jpg" alt="Food 1" style={{ maxWidth: '100%', width: '95%', height: '95%', margin: 'auto' }} />
              </div>
              <div className="card px-2">
                <h6 className="mt-auto mb-1">@buzzfeedfood</h6>
                <p className="my-1" style={{ fontSize: '1rem', fontWeight: '300' }}>It’s taco Tuesday! These tacos
                from @jesseszewczyk have no
                added sugars and are SO good
                🌮 . Find the recipe from the
                link in our bio! 📸 : @taylormillerphoto</p>
                <div className="my-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                  <div className="ml-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <img className='mx-1' src="./comments.png" alt="comments" />
                    60
                  </div>

                  <div className="mx-2 mr-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <img className='mx-1' src="./likes.png" alt="likes" />
                    14.7k
                  </div>

                </div>
              </div>
            </div>


            <div style={{ width: '100%' }}>
              <div className={sectionNumber === 2 ? "card-group animate__animated animate__fadeInUpBig mr-auto" : 'card-group mr-auto'} style={{ position: 'relative', alignSelf: 'flex-end' }}>
                <img src="detail03.png" alt="detail 03" style={{ position: 'absolute', top: '50%', left: '30%' }} />

                <div className="card px-2">
                  <h6 className="mt-auto mb-1">@love_food</h6>
                  <p className="my-1" style={{ fontSize: '1rem', fontWeight: '300' }}>Waffle sticks in Copenhagen! 😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷 : @foodwithmichel] #lovefood</p>
                  <div className="my-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                    <div className="ml-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <img className='mx-1' src="./comments.png" alt="comments" />
                    789
                  </div>

                    <div className="mx-2 mr-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <img className='mx-1' src="./likes.png" alt="likes" />
                    99.7k
                  </div>

                  </div>
                </div>
                <div className="card">
                  <img src="./Insta-colored.png" alt="Insta-colored" style={{ position: 'absolute', top: '0', right: '0' }} />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq86Z05_u3Fx3h_i3Ufyexdgrni0AUeUAsEg&usqp=CAU" alt="Food 1" style={{ maxWidth: '100%', width: '95%', height: '95%', margin: 'auto' }} />
                </div>
              </div>
            </div>

            <p className="section2__loneText mt-5 mr-auto" style={{ fontSize: '1rem', width: '20%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.</p>


            <div className={sectionNumber === 2 ? "card-group animate__animated animate__fadeInUpBig" : 'card-group'} style={{ position: 'relative', alignSelf: 'flex-end' }}>
              {/* <img src="https://public-v2links.adobecc.com/b0192e90-6c9b-47c6-6918-b0b1c86ef48c/component?params=component_id%3A3b650916-3b32-435d-bc7e-9574baaa3299&params=version%3A0&token=1621652727_da39a3ee_56c57eb062d7854501cbcc28df01cbcb49ba9ce1&api_key=CometServer1" alt="detail 02" style={{ position: 'absolute', top: '80%', left: '30%' }} /> */}
              <div className="card">
                <img src="./Insta-colored.png" alt="Insta-colored" style={{ position: 'absolute', top: '0', right: '0' }} />
                <img src="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7-510x541.jpg?resize=600%2C636" alt="Food 1" style={{ maxWidth: '100%', width: '95%', height: '95%', margin: 'auto' }} />
              </div>
              <div className="card px-2">
                <h6 className="mt-auto mb-1">@buzzfeedfood</h6>
                <p className="my-1" style={{ fontSize: '1rem', fontWeight: '300' }}>It’s taco Tuesday! These tacos
                from @jesseszewczyk have no
                added sugars and are SO good
                🌮 . Find the recipe from the
                link in our bio! 📸 : @taylormillerphoto</p>
                <div className="my-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                  <div className="ml-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <img className='mx-1' src="./comments.png" alt="comments" />
                    60
                  </div>

                  <div className="mx-2 mr-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <img className='mx-1' src="./likes.png" alt="likes" />
                    14.7k
                  </div>

                </div> 
              </div>
            </div>

          </div>
        </div>
      </ScrollAnimation>


      <ScrollAnimation duration={0.01} animateIn="animate__fadeIn" initiallyVisible={true} afterAnimatedIn={() => { setSection(3) }}  style={{width: '100vw', overflowX: 'hidden'}}>
        <div className="section3" style={{}}>
          <div className="section3__header" style={{}}>
            <h3 style={{ margin: '0' }}>POPULAR</h3>
            <h1 style={{ margin: '0 0 0.6rem' }}>RECIPES</h1>
            <a href="dgfsg" className="commonLink" >SEE&nbsp;ALL</a>
          </div>
          <div className="section3__subHeader ml-auto" style={{}}>
            <h3 className="my-0 mx-0 mb-2">DO YOU WANT TO SHARE YOUR OWN RECIPE?</h3>
            <a href="dgfsg" className="commonLink">SEND&nbsp;IT&nbsp;NOW</a>
          </div>


          <div className="carouselRow mt-5" style={{ transform: `translateX(-` + scrollElement * 250 + `px)` }}>
            {Recipes.map((el, index) => {
              return <div key={index} className={scrollElement === index ? "card bigCard" : "card"} style={el.alignEnd ? { alignSelf: 'flex-end' } : {}}>
                <div className="header__image">
                  <img src={el.imgSrc} alt="Recipe sample" />
                  <div className="servings">
                    <h2>{el.servings}</h2>
                    <p>SERVINGS</p>
                  </div>
                  <a href={el.link} style={scrollElement === index ? { width: '20%', position: 'absolute', bottom: '0', right: '0' } : { width: '25%', position: 'absolute', bottom: '0', right: '0' }}>
                    <img style={{ maxWidth: '100%' }} src="link.png" alt="link" />
                  </a>

                  {el.chefChoice ? (
                    <img style={{ maxWidth: '40%', maxHeight: '40%', position: 'absolute', top: '-18%', right: '10%', objectFit: 'contain' }} src="chef.png" alt="chef choice" />) : ''}

                </div>
                <div className="card-body">
                  <p style={{ fontSize: '80%', fontWeight: '400', color: '#808080b3' }}>Difficulty</p>
                  <p className="card-header">
                    {el.title}
                  </p>
                  <p className={scrollElement === index ? "card-text animate__animated animate__fadeIn": "card-text"}>
                    {el.text.length > 100 ? (el.text.substring(0, 97) + '...') : el.text}
                  </p>
                </div> 
                <p style={{ fontSize: '80%', fontWeight: '400', color: '#808080b3', position: 'absolute', bottom: '-2.5rem', right:'10%' }}>USER&nbsp;FULL&nbsp;NAME</p>
              </div>

            })}


          </div>


          <div className="scrollControl mt-5"> 
              <button onClick={scrollPrevious} className="previous">
                <img  src={leftPossible? "next.png": "previous.png"} style={leftPossible? { transform: 'rotate(180deg)' }: {}} alt="previous" />
              </button>
 
              <button onClick={scrollNext} className="next">
                <img src={ rightPossible? "next.png": "previous.png"} style={rightPossible? {} : { transform: 'rotate(180deg)' }} alt="previous" />
              </button>  
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default App;
