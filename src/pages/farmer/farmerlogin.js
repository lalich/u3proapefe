import { Form } from "react-router-dom";

const FLogin = () => {
    return <div>
        <h3>Login Farmer</h3>
        <Form action="" method="POST">
            <label htmlFor="farmername">Farmername</label>
            <input type="text" name="farmername" id="farmername" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="start plantin" />
        </Form>
    </div>
}

export default FLogin;