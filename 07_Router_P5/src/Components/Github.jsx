import React, { useEffect, useState } from 'react'



function Github() {
    const [userData,setuserData] = useState(null)
    const [username,setUsername] = useState('')
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState('');

    // User Data
    // https://api.github.com/users/Shehbaz456

    const fetchUserData = async()=>{
      
      try{
        setError('');
        const userResponse = await fetch(`https://api.github.com/users/${username}`)
        if (!userResponse.ok) {
          throw new Error('User not found');
        }
        const userData  =  await userResponse.json();
        setuserData(userData);


        const reposResponse = await fetch(userData.repos_url);
        if (!reposResponse.ok) {
          throw new Error('Could not fetch repositories');
        }
        const reposData = await reposResponse.json();
        setRepos(reposData);

        
      }catch{
        setError(error.message);
        setuserData(null);
        setRepos([]);
      }
         
    }

  return (
    <div className='bg bg-slate-400 h-full '>


<br />
<div className="bg-white rounded-lg w-[80%] m-auto text-center p-5  ">
  <div className="flex p-2 gap-1">
    <div className="">
      <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
    </div>
  </div>
  <div className="card__content">
  </div>


  <div>
      <input value={username} onChange={(e)=>setUsername(e.target.value)} className='p-4 text-xl border rounded-2xl w-1/2 m-2'  type="text" placeholder=' ✍️ Enter your github name ' />
    </div>
    <button onClick={fetchUserData} className="ml-2 p-2 bg-gray-600 text-white rounded">
        Search 👉
    </button>
  

    {error && <p className="text-red-500">{error}</p>}

    <div className='text-center text-black'>
    {userData && (
        <div className="user-profile">
        
        <div className='flex justify-center p-4'>
          <img src={userData.avatar_url} alt={userData.login} className="w-40 h-40 rounded-full" />
        </div>
          <h2 className="text-xl font-bold">{userData.login}</h2>
          <p><b>bio:</b> {userData.bio}</p>
          <p >Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
      )}

      {repos.length > 0 && (
        <div className="repos mt-4">
          <h3 className="text-lg font-bold text-center ">Repositories: {userData.public_repos} </h3>
          <br />
          <ul className='flex justify-center align-middle  flex-wrap gap-1  '>
            {repos.map((repo) => (
              <li className='p-3 bg-gray-500 ring-4 ring-gray-300 ring-inset inline-block text-white rounded-md' key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}


      </div>

    </div>

<br />



</div>









    


  )
}

export default Github
