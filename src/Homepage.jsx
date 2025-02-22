import React from 'react'
import styles from './Home.module.css'

const Homepage = () => {
  const hero = 'http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740135325/crfrtekdkzp9ml0nexbg.png'
  const lap='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740146823/pgnsp7rgwdhyjja7jljq.png'
  const mo='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740146890/glxvkddriehq7d5drhp5.png'
  const child='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740147112/w31ukfkducscw5hdzqhw.png'
  const sky='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740151187/iqvd1xl51wfiihet2zkm.png'
  const calender='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740158765/khinrxfnttby1x86hqzl.png'
  const searchicon='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740158657/yx3krbazyafj4cnupxed.png'
  const heart='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740159144/yxvxeeszbyl2xgjcoyr3.png'
  const da='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740163559/dqyxnnzkd1pd0umktshx.png'
  const ta='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740163611/hyuauqvfpnr9tb39pugf.png'
  const hearts='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740165368/nq684cpz8dl371gem96p.png'
  const fam='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740165415/s1fplt3i4yedsjrwu1pw.png'
  const gs='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740200753/qc7hwznjzbsc7hg7kqzt.png'
  const stars='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740203168/bfusztdctixfr3b3w2px.png'
  const logo='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740207081/qelcvtoqgefcdmzsu09a.png'
  const inst='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740207702/cvj6zwwzyllkbllmmgfx.png'
  const lin='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740209303/g8jrzuhd6urhqvugwkbf.png'
  const herom='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740220026/w6ndfqioguafwwqymuyl.png'
  const gsm='http://res.cloudinary.com/dgkcgjcw5/image/upload/v1740224750/hifq1rewkubiivewfygf.png'

  return (
    <>
      <div className={styles.firstimg}>
      <img src={hero} className={`${styles.hero1} ${styles.desktopImg}`} alt="Hero Image" />
      <img src={herom} className={`${styles.hero1} ${styles.mobileImg}`} alt="Mobile Hero Image" />
        <div className={styles.fig}>
          <h2 className={styles.hs22}>
            Your Child's Perfect Schedule <br className="hidden sm:block" /> in Just a Few Clicks
          </h2>
          <p class="text-white text-[18px] sm:text-xl mb-8 font-normal font-lato" className={styles.per}>Less Planning, More Living.</p>
          <button className={styles.btn1}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  style={{ verticalAlign: "middle", marginTop: "0px" }}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
</svg><span className={styles.spn}>Join the waiting list</span></button>
        
        </div>
        
        
      </div>


      <div className={styles.cont2}>
        <h2 className={styles.wl}>Why Justliv?</h2>

      </div>


      <div className={styles.cont3}>

        <div className={styles.c1}>



        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  style={{ verticalAlign: "middle", marginTop: "10px",marginLeft:'20px' }}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
</svg>
             <h3 className={styles.hl3}>Custom Calender</h3>
             <p className={styles.pl}>

             Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.

             </p>

             <img src={lap} className={styles.lap1} ></img>
       
        </div>

        <div className={styles.c2}>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  style={{ verticalAlign: "middle", marginTop:   "10px",marginLeft:'20px'}}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
</svg>
             
       <h3  className={styles.hl3}>Tailored to Your Interests</h3>

<p className={styles.pl}>Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they’re attending.</p>
  

<img src={child} className={styles.lap2} ></img>
        </div>


        <div className={styles.c3}>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  style={{ verticalAlign: "middle", marginTop: "10px",marginLeft:'20px'}}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
</svg>
             <h3  className={styles.hl3}>Stress-Free Bulk Booking</h3>
             <p className={styles.pl}>
             Book all your child’s activities in just a few clicks. Our platform handles the details so you don’t have to.
             </p>
       
             <img src={mo} className={styles.lap3} ></img>

        </div>
    

      </div>
   

   
      <div className={styles.content4}>
  <img src={sky} className={styles.sky1} alt="Background Sky" />
  <h2 className={styles.hl4}>How it works</h2>

  <div className={styles.sve}>
    {/* Icons List */}
    <div className={styles.iconList}>
      <img src={searchicon} className={styles.cal2} alt="Search Icon" />
      <img src={calender} className={styles.cal2} alt="Calendar Icon" />
      <img src={heart} className={styles.cal2} alt="Heart Icon" />
    </div>



    {/* Description List */}
    <div className={styles.textList}>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>Browse</h3>
        <p className={styles.description}>
          Discover activities from our partner booking providers.
        </p>
      </div>

      <div className={styles.textWrapper}>
        <h3 className={styles.title}>Build</h3>
        <p className={styles.description}>
          Share your child’s interests, schedule, and preferences. Watch as JustLiv creates the perfect calendar filled with activities.
        </p>
      </div>

      <div className={styles.textWrapper}>
        <h3 className={styles.title}>Book</h3>
        <p className={styles.description}>
          Finalize your selections with one click and enjoy peace of mind.
        </p>
      </div>
    </div>
  </div>
  <div className={styles.arr}>

      <img src={da} className={styles.arr2}  />
      <img src={ta} className={styles.arr1}  />

    </div>
</div>

       
 <div className={styles.cont5}>
 <div className={styles.hsst}>
<img src={hearts} className={styles.hst2}/>
</div>

<h2 className={styles.hs6}>
Our Mission



</h2>


<p className={styles.missionText}>
    Parents need a simple way to find, book, and track their kids' activities. 
    Businesses need a better way to be found and to keep families coming back.
  </p>


<br></br>

<p className={styles.purp5}>Our purpose is to</p>
  {/* Purpose Statement */}
  <p className={styles.purposeText}>
   
    
    <strong>make parents' lives</strong> 
    <span className={styles.highlight}> easier, happier,</span> and 
    <span className={styles.highlight2}> less stressful.</span>
  </p>

  {/* Supporting Text */}
  <p className={styles.supportText}>
    As parents and business owners, we get it.
  </p>

  {/* Mission Image */}
  <div className={styles.imageContainer}>
    <img src={fam} className={styles.missionImage} alt="Kids Camping" />
  </div>

 </div>
     
<div className={styles.cont6}>
  <div className={styles.gs5}>
  <img src={gs} className={`${styles.gs1} ${styles.desktopgs}`} alt="Hero Image" />
      <img src={gsm} className={`${styles.gs1} ${styles.mobilegs}`} alt="Mobile Hero Image" />
<div className={styles.gs8}>
<h1 className={styles.hs7}>Ready to Simplify Your Life?</h1>
<p className={styles.ps6}>Be the first to know when we launch! Join our waiting list and get exclusive updates and early access to our journey.</p>
</div>



<button className={styles.btn2}>
<img src={stars}className={styles.stars}  alt="Star Icon"/>
 
<p className={styles.spn2}>Join the waiting list</p>  


</button>


  </div>

</div>

<footer>
  <div className={styles.foot}>
    <div className={styles.pf}>
<img src={logo} className={styles.lg1}/>

      </div>

      <div className={styles.connect}>
<img src={inst} className={styles.inster}></img>
<p>Connect with us on Instagram ♡</p>

      </div>
      <div className={styles.p4}><p>Privacy policy</p>

<p>Accessibility Statement</p></div>
<div className={styles.l1}>
<img src={lin} className={styles.lin2}/>
</div>

<div>
  <p className={styles.p55}>
  © 2024 by JustLiv
    
    </p></div>
  </div>


 
</footer>


    </>
  )
}

export default Homepage
