// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import '/css/style.scss'
const swiper = new Swiper('.graphic__slider', {
  slidesPerView: 5,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    890: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1040: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1070: {
      slidesPerView: 3,
      spaceBetween: 20
    },

    1420: {
      slidesPerView: 4,
      spaceBetween: 30
    },

    1728: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});
const navBurger = document.querySelector('.nav__burger');
const navMenu = document.querySelector('.nav__menu');
const navClose = document.querySelector('.nav__close');
const mainLogin = document.querySelector('.main-login');
const singInButton = document.querySelector('.sing-in');
const singUpButton = document.querySelector('.sing-up');
const mainLoginClose = document.querySelector('.main-login__close');
const headerImgPlay = document.querySelector('.header__img-play');
const letsGo = document.querySelector('.lets-go');

function modal(){
  mainLogin.insertAdjacentHTML('afterbegin', `
  <div class="modal">
  <h3>Модальное окно</h3>
  <p>Исчезает по таймеру</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>
  `)
  setTimeout(()=> document.querySelector('.modal').remove(), 1000);
}

if(headerImgPlay){
  headerImgPlay.addEventListener('click', ()=>{
    modal()
  })
}
if(letsGo){
  letsGo.addEventListener('click', ()=>{
    modal()
  })
}

if(navBurger){
  navBurger.addEventListener('click', ()=>{
    navMenu.style.top = '0';
    navClose.classList.remove('hidden')
    document.querySelector('body').style.overflowY = 'hidden';
  })
  navClose.addEventListener('click', ()=>{
    navMenu.style.top = '-100%';
    navClose.classList.add('hidden')
    document.querySelector('body').style.overflowY = 'auto';
  })
}

window.addEventListener('scroll', function() {
  if(document.querySelector('body').offsetWidth > 580){
    if(pageYOffset >= mainLogin.clientHeight / 3){
      mainLogin.style.top = '-300%';
    }
  }
  if(document.querySelector('body').offsetWidth < 580){
    if(pageYOffset >= mainLogin.clientHeight / 2.5){
      mainLogin.style.top = '-300%';
    }
  }
});

function createMainLogin(mainLogin){
  mainLogin.insertAdjacentHTML('afterbegin', `
  	<div class="container">
			<div class="blue-bg">
				
				<div class="box signin">
					<div class="title">Already Have an Account?</div>
					<button class="signin-btn">Sing in</button>
				</div>
				<!-- /.box .signin -->

				<div class="box signup">
					<div class="title">Don't Have an Account?</div>
					<button class="signup-btn">Sing up</button>
				</div>
				<!-- /.box .signup -->

			</div>

			<!-- /.blue-bg -->
			<div class="form-bx">
				<div class="form singin-form">
					<form action="#" type="post">
						<div class="title">Sing In</div>
						<input type="text" name="user-name" placeholder="Username">
						<input type="password"name="user-name" placeholder="Password">
						<input type="submit" value="Login">
						<a href="#!" class="forgot">Forgot Password</a>
					</form>
				</div>
				<!-- /.form singin-form -->

				<div class="form singup-form">
					<form action="#" type="post">
						<div class="title">Sing Up</div>
						<input type="text" name="user-name" placeholder="Username">
						<input type="email" name="user-email" placeholder="Email Address">
						<input type="password"name="user-name" placeholder="Password">
						<input type="password"name="user-name" placeholder="Confirm Password">
						<input type="submit" value="Register">
						<a href="#!" class="forgot">Forgot Password</a>
					</form>
				</div>
				<!-- /.form singin-form -->

			</div>
			<!-- /.form-bx -->
		</div>
  `
  );
}
if(mainLogin){
  createMainLogin(mainLogin);
  const signInBtn = mainLogin.querySelector('.signin-btn');
  const signUpBtn = mainLogin.querySelector('.signup-btn');
  const formBx = mainLogin.querySelector('.form-bx');
  signUpBtn.addEventListener('click', ()=>{
    formBx.classList.add('active');
    mainLogin.classList.add('active');
  })
  signInBtn.addEventListener('click', ()=>{
    formBx.classList.remove('active');
    mainLogin.classList.remove('active');
  })

  //-----------------
  if(singInButton){
    singInButton.addEventListener('click', ()=>{
      mainLogin.style.top = '0';
    })
  }
  if(singUpButton){
    singUpButton.addEventListener('click', ()=>{
      mainLogin.style.top = '0';
      formBx.classList.add('active');
      mainLogin.classList.add('active');
    })
  }
  mainLoginClose.addEventListener('click', ()=>{
    mainLogin.style.top = '-300%';
    formBx.classList.remove('active');
    mainLogin.classList.remove('active')
  })
}

const loaderСontainer = document.querySelector('body');
if(loaderСontainer){
  document.querySelector('body').style.overflowY = 'hidden';
  loaderСontainer.insertAdjacentHTML('afterbegin', `
 <div class="loader-container">
		<div class="loader">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<div class="loader-text">Loading...</div>
			<!-- text count = 10 -->
	</div>
	</div>
 `);
  function hoverLoader(){
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hover')
  }
  function removeLoader(){
    document.querySelector('.loader-container').remove();
    document.querySelector('body').style.overflowY = 'auto';
  }
  setTimeout(hoverLoader, 1500);
  setTimeout(removeLoader, 2000);
}
