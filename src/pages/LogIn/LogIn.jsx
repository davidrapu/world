import styles from './LogIn.module.css';
import NavBar from '../../components/Navigation/NavBar';
import Button from '../../components/Button/Button'
function LogIn() {
    return (
        <div className={styles.login}>
            <NavBar />
            <main>
                <form>
                    <fieldset>
                        <label for='userEmail' >Email Address</label>
                        <input type="email" name="userEmail" id='userEmail' />
                    </fieldset>
                    <fieldset>
                        <label for='userPassword'>Password</label>
                        <input type="password" name="userPassword" id="userPassword" />
                    </fieldset>
                    <Button>Login</Button>
                </form>
            </main>
        </div>
    )
}

export default LogIn
