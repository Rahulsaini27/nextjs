
export default function Page() {
  

  

    return ( // Move the JSX rendering outside of the handleSubmit function
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <form className="space-y-6" >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                           
                            required
                            className="w-full p-2 mt-1 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                          
                            required
                            className="w-full p-2 mt-1 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
