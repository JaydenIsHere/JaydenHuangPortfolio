import MyPhoto from '../images/Corporate_photo.png';
import OrangeTee from '../images/Tee.jpg';
import SmartSeller from '../images/SmartSeller.jpg';
import STWarrior from '../images/STWarrior.png';
import GradeSolution from '../images/GradeSolution.png'; // Placeholder for Item 4
import NewTown from '../images/newtown.png'; // Placeholder for Item 5
import aboutImage from '../images/AboutMe.png'; 
import './homepage.css';

const HomePage = () => {
  return (
    <>
      <section className='home py-5' id='home'>
        <div className='container flex-wrap'>
          <div className='home-content text-light' data-aos='fade-right'>
            <h4>Hi there!</h4>
            <h2 className='xl'>I'm Jayden,</h2>
            <h2 className='xl'>Social Media Manager</h2>
            <h5>
              I help brands tell their stories, engage audiences <br />and achieve measurable results through <br />data-driven social media campaigns.
            </h5>
            <a href='/#project' className='btn btn-blue'>
              View Portfolio
            </a>
          </div>
          <div className='image' data-aos='fade-left'>
            <img src={MyPhoto} alt="Jayden's corporate photo" />
          </div>
        </div>
      </section>

      {/* -------------About section--------- */}
      <section className='about' id='about'>
        <div className='container'>
          <div className='about-header text-light' data-aos='zoom-in'>
            <h3>About</h3>
            <h1>
              Personal <span className='text-blue'>Info</span>
            </h1>
            <h3>Get to know more about me </h3>
          </div>
          <div className='about-body flex-wrap my-3 py-3'>
            <div className='about-image' data-aos='fade-right'>
              <img src={aboutImage} alt='Jayden Web' />
            </div>

            <div className='about-content text-light' data-aos='fade-left'>
              <h3 className='text-blue'>Hello!</h3>
              <p>
                With over 7 years of experience in branding and content management, I specialize in crafting compelling brand stories and driving measurable results through strategic content marketing. I’ve successfully generated an average of 100+ leads per month for a leading property company by leveraging storytelling and innovative digital strategies.
              </p>
              <p>
                As a content creator, I’ve grown my own YouTube channel to over 2 million views, showcasing my ability to connect with audiences and deliver engaging, high-quality content. Passionate about the rise of AI, I integrate cutting-edge tools to enhance strategies and push brands to new heights of visibility and engagement.
              </p>
              <p>
                I thrive on being a driving force behind brand growth, helping companies elevate their positioning and achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='skill-section'>
        <div className='skill-container' data-aos='zoom-in'>
          <h1 className='skill-title text-light'>Skills</h1>
          <div className='skill-grid'>
            <div className='skill-card'><h3 className='skill-category'>Content Strategy Development</h3></div>
            <div className='skill-card'><h3 className='skill-category'>Paid Advertising & Campaign Management</h3></div>
            <div className='skill-card'><h3 className='skill-category'>Brand Positioning & Storytelling</h3></div>
            <div className='skill-card'><h3 className='skill-category'>Performance Analytics</h3></div>
            <div className='skill-card'><h3 className='skill-category'>Data-Driven Decision Making</h3></div>
            <div className='skill-card'><h3 className='skill-category'>Lead Generation & Conversion Optimization</h3></div>
            <div className='skill-card'><h3 className='skill-category'>Project Management</h3></div>
            <div className='skill-card'><h3 className='skill-category'>Trend Analysis & Market Research</h3></div>
          </div>
        </div>
      </section>

      {/* -------------Project section--------- */}
      <section className='project-section' id='project'>
        <div className='container py-2'>
          <div className='project-header text-light' data-aos='zoom-in'>
            <h3>Experience</h3>
            <h1>
              Brand <span className='text-blue'>Portfolio</span>
            </h1>
            <h3>A Collection of My Work</h3>
          </div>
          <div className='projects'>
            {/* item1 */}
            <div className='project flex-wrap'>
              <div className='image'><img src={SmartSeller} alt='SmartSeller' /></div>
              <div className='project-content'>
                <h1>SmartSeller <br/><span className='text-blue'>Real Estate Company</span></h1>
                <p>
                  Company: Hippo Prop Pte Ltd<br/>
                  Objective: Lead Generation / Brand Building<br/>
                  Role: Social Media Specialist<br/>
                  Period of Time: 2024 - 2025<br/>
                </p>
                <div className='project-buttoms'>
                  <div className='project-btn' onClick={() => (window.location.href = 'https://www.tiktok.com/@sg.smartseller')}>
                    <i className='fa-solid fa-code' /><p>Visit</p>
                  </div>
                  <div className='project-btn' onClick={() => (window.location.href = 'https://drive.google.com/file/d/1Rwdu5KTV_C9jVoyo2DsS2EWGpkKDtMpd/view?usp=sharing')}>
                    <i className="fas fa-chart-bar"></i><p>Project Detail</p>
                  </div>
                </div>
              </div>
            </div>

            {/* item2 */}
            <div className='project flex-wrap'>
              <div className='image'><img src={OrangeTee} alt='OrangeTee' /></div>
              <div className='project-content'>
                <h1>OrangeTee & Tie <br/><span>Real Estate Company</span></h1>
                <p>
                  Company: OrangeTee & Tie Pte Ltd<br/>
                  Objective: Brand Building<br/>
                  Role: Producer / Content Creator<br/>
                  Period of Time: 2021 - 2024<br/>
                </p>
                <div className='project-buttoms'>
                  <div className='project-btn' onClick={() => (window.location.href = 'https://www.youtube.com/@orangeteeagentshub')}>
                    <i className='fa-solid fa-code' /><p>Visit</p>
                  </div>
                  <div className='project-btn' onClick={() => (window.location.href = 'https://drive.google.com/drive/folders/10j225rgha4KqPVARM5cXPokqCWYHaLWZ?usp=sharing')}>
                    <i className="fas fa-chart-bar"></i><p>Project Detail</p>
                  </div>
                </div>
              </div>
            </div>

            {/* item3 */}
            <div className='project flex-wrap'>
              <div className='image'><img src={STWarrior} alt='ST Warrior' /></div>
              <div className='project-content'>
                <h1>ST Warrior <br/><span>Youtube Channel</span></h1>
                <p>
                  Channel: ST Warrior<br/>
                  Objective: Personal Branding / Affiliate Marketing<br/>
                  Role: Influencer<br/>
                  Period of Time: 2016 - present<br/>
                </p>
                <div className='project-buttoms'>
                  <div className='project-btn' onClick={() => (window.location.href = 'https://www.youtube.com/@stwarrior9983')}>
                    <i className='fa-solid fa-code' /><p>Visit</p>
                  </div>
                  <div className='project-btn' onClick={() => (window.location.href = 'https://docs.google.com/presentation/d/1UhIIfZezS_BVUA88kZI5Hfsc9I6hawX2z0ShpqYeOJE/edit?usp=sharing')}>
                    <i className="fas fa-chart-bar"></i><p>Project Detail</p>
                  </div>
                </div>
              </div>
            </div>

            {/* item4 - Added: Grade Solution */}
            <div className='project flex-wrap'>
              <div className='image'><img src={GradeSolution} alt='Grade Solution' /></div>
              <div className='project-content'>
                <h1>Grade Solution <br/><span className='text-blue'>Learning Centre</span></h1>
                <p>
                  Company: Grade Solution Learning Centre<br/>
                  Objective: Lead Gen Ads & Content Strategy<br/>
                  Role: Social Media Manager<br/>
                  Period of Time: 2025 - Present<br/>
                </p>
                <div className='project-buttoms'>
                  <div className='project-btn' onClick={() => (window.location.href = 'https://www.instagram.com/gradesolution/')}>
                    <i className='fa-solid fa-code' /><p>Visit</p>
                  </div>
                  <div className='project-btn' onClick={() => (window.location.href = 'https://docs.google.com/presentation/d/1vKEi3Gb39o4esCBFsQynW7YpodD0Q9nZRkmvkuIugf4/edit?usp=sharing')}>
                    <i className="fas fa-chart-bar"></i><p>Project Detail</p>
                  </div>
                </div>
              </div>
            </div>

            {/* item5 - Added: NewTown */}
            <div className='project flex-wrap'>
              <div className='image'><img src={NewTown} alt='NewTown' /></div>
              <div className='project-content'>
                <h1>New Town Engineering <br/><span>construction equipment</span></h1>
                <p>
                  Channel: NewTown TikTok<br/>
                  Objective: Short-form Content Strategy<br/>
                  Role: Digital Creator<br/>
                  Period of Time: 2024 - Present<br/>
                </p>
                <div className='project-buttoms'>
                  <div className='project-btn' onClick={() => (window.location.href = 'https://www.tiktok.com/@newtownsg?is_from_webapp=1&sender_device=pc')}>
                    <i className='fa-solid fa-code' /><p>Visit</p>
                  </div>
                  <div className='project-btn' onClick={() => (window.location.href = 'https://docs.google.com/presentation/d/1-yCBhk3KvT8VtPSFvt7cFkmsWZInH1AZjJR4Plc_sLU/edit?usp=sharing')}>
                    <i className="fas fa-chart-bar"></i><p>Project Detail</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;