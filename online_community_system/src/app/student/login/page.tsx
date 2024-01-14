

function login() {
    return (
        <div className="w-full lg:w-7/12 bg-blue-50 dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none overflow-y-auto">
            <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Login to Your Account</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-600 border border-blue-300 dark:border-gray-600 rounded focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-600 border border-blue-300 dark:border-gray-600 rounded focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        required
                    />
                </div>
                <div className="mb-6 text-center">
                    <button
                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                <hr className="mb-6 border-t" />
                {/* <div className="text-center">
                    <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div> */}
                <div className="text-center">
                    <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800" href="./index.html">
                        Don't have an account? Sign up!
                    </a>
                </div>
            </form>
        </div>


    );
}
export default login;

