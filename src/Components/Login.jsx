function Login() {
    return ( 
        <div className="card">
            <div className="font-bold text-gray-100 text-2xl mb-8 text-center my-5"> Log in</div>
            <form className="mt-5 w-[90%] mx-auto">
                <div className="my-6">
                <label  className="text-xl block font-bold text-gray-100 mb-3">Email Address </label>
                <input type="email" placeholder="Example@gmail.com" className="inputs"></input>
                </div>
                <div className="my-6">
                <label  className="text-xl block font-bold text-gray-100 mb-3">Password </label>
                <input type="password" placeholder="******" className="inputs"></input>
                </div>
                <div className="my-7 flex items-center justify-between">
                    <button className="btns"> Login to Website</button>
                    <a href="/" className="text-sm text-gray-200">Forget Password</a>
                </div>
            </form>
        </div>
     );
}

export default Login;
