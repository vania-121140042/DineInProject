const Login = () => {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
            </div>
          </div>

          <div className="text-center">
            <p className="text-yellow-500 text-2xl leading-none font-pacifico">subways</p>
            <div className="mt-2">
              <span className="block w-16 h-1 bg-gray-200 rounded mx-auto"></span>
            </div>
            <div className="text-black text-lg font-medium mt-2">
              Subway at Setiabudi One
            </div>
            <div className="text-gray-500 text-sm">
              18, Jl. H. R. Rasuna Said No.18, RT.18/RW.2, Kuningan, Karet Kuningan,
              Setiabudi, South Jakarta City, Jakarta 12920 
            </div>
          </div>

          <div className="mb-4">
            <img 
            src= "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xa5yq47nn2j-3%3A1927?alt=media&token=32eea38f-a959-4a93-97e3-fb4d55ea2a1f"
            alt="Subway Offer" 
            className="w-full rounded-md"/>
          </div>

          <div className="flex items-center border border-gray-300 rounded-md mb-4">
            <div className="bg-yellow-500 text-white p-2 rounded-l-md flex items-center">
              <span className="mr-2">🇮🇩</span> +62
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="flex-1 p-2 outline-none"
            />
          </div>

          <button className="w-full bg-yellow-500 text-white p-2 rounded-md font-medium"> Lets Go </button>

          <div className="text-center text-gray-500 text-xs mt-4">
            By clicking let’s go, you agree to all applicable{' '}
            <span className="text-yellow-500">Terms of Use and Privacy Policy</span>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-green-500" />
              <span className="ml-2 text-sm text-gray-600">
                I agree to signup for the free membership program for active mobile number only
              </span>
            </div>

            <div className="flex items-center mt-2">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-green-500" />
              <span className="ml-2 text-sm text-gray-600">
                send me subways news, event, and exclusive offers
              </span>
            </div>
          </div>  
        </div>
      </div>
    );
  };
  
  export default Login;