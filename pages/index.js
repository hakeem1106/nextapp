import Head from 'next/head';
import "../css/style.css";
import 'bootstrap'

const Login=() => {


    return (
        <div>
        <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        </Head>
            <div id="formy" className="position-absolute">
            <form method="POST" action="/index">
            <input type='text'className="form-control" placeholder="Username" name="username"></input>
            <br></br>
            <input type="password" className="form-control" placeholder="Password" name="password"></input>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
    )
}

export default Login