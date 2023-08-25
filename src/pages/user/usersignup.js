import { Form } from "react-router-dom";
import { farmerSignupAction } from "../../actions";

const USignup = () => {
    return <div>
        <h3>User Signup</h3>
        <Form action="" method="POST">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
           <br/>
            <label htmlFor="zip">Zip</label>
            <input type="text" name="zip" id="zip" />
            <input type="submit" value="Signup" />
        </Form>
    </div>
}

export default USignup;