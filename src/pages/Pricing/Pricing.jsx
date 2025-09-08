import NavBar from "../../components/Navigation/NavBar"
import styles from './Pricing.module.css'
import pic from "../../assets/images/img-2.jpg";

function Pricing(){
    return (
      <div className={styles.pricing}>
        <NavBar />
        <main>
            <section>
                <h2>
                Simple pricing.
                <br />
                Just $9/month.
                </h2>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                vel labore mollitia iusto. Recusandae quos provident, laboriosam
                fugit voluptatem iste.
                </p>
            </section>
            <img src={pic} alt="City View" />
        </main>
      </div>
    );
}

export default Pricing