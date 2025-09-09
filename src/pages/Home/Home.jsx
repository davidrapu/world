import styles from './Home.module.css'
import NavBar from '../../components/Navigation/NavBar'
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className={styles.homepage}>
        <NavBar />
        <main className={styles.main}>
          <h1>You Travel the world <br /> WorldWise keeps track of your adventures</h1>
          <h2>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
          <Link to='/login'>
            <Button><strong>START TRACKING NOW</strong></Button>
          </Link>
        </main>
      </div>
    );
}

export default Home
