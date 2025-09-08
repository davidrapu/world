import NavBar from "../../components/Navigation/NavBar";
import styles from './Product.module.css';
import pic from "../../assets/images/img-1.jpg";

function Product() {
    return (
      <div className={styles.products}>
        <NavBar />
        <main className={styles.main}>
          <img src={pic} alt="Man with dog" />
          <section className={styles.desc}>
            <h2>About WorldWide.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
              dicta illum vero culpa cum quaerat architecto sapiente eius non
              soluta, molestiae nihil laborum, placeat debitis, laboriosam at
              fuga perspiciatis?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              doloribus libero sunt expedita ratione iusto, magni, id sapiente
              sequi officiis et.
            </p>
          </section>
        </main>
      </div>
    );
}

export default Product
