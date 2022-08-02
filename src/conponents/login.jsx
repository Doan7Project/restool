import React, { Component } from 'react';
function Login() {
    return (
        <main className='form'>
            <div className='text-center bg-body txtContent'>
                <h2>RESERVATION MANAGEMENT</h2>
            </div>
            <form>
                <div className='formManulCss shadow rounded m-auto p-5'>
                    <div className='row text-center'>
                        <h2>LOGIN</h2>
                    </div>
                    <div className='row my-3'>
                        <label htmlFor="username">UserName</label>
                        <input className='form-control' type="text" id='username' placeholder='Enter UserName' />
                    </div>
                    <div className='row '>
                        <label htmlFor="password">Password</label>
                        <input className='form-control' type="password" name="" id="password" placeholder='Enter Password' />
                    </div>
                    <div className='row text-center my-3'>
                        <label className='px-2'>
                            <input className='mx-2' type="checkbox" name="Remember-me" id="" />Remember Me
                        </label>
                    </div>
                    <div className='row'>
                    <button type="button" class="btn btn-secondary">Login</button>
                    </div>
                </div>
            </form>
        </main>
       
    );
}

export default Login;


