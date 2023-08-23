import { Form } from "react-router-dom";

const FSignup = () => {
    return <div>
        <h3>Farmer Signup</h3>
        <Form action="" method="POST">
            <label htmlFor="farmername">Farmername</label>
            <input type="text" name="farmername" id="farmername" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Signup" />
        </Form>
    </div>
}

export default FSignup;